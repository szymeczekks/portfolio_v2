import type { APIRoute } from "astro";
import type { ContactData } from "../../components/Contact.astro";
import { Resend } from "resend";
import { escapeHTML } from "astro/runtime/server/escape.js";

export interface InputError {
    name: 'name' | 'email' | 'message' | 'consent',
    message: {
        pl: string,
        en: string
    }
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body: ContactData = await request.json();
        const errors: InputError[] = [];

        if (!body.consent) {
            errors.push({
                name: 'consent',
                message: {
                    pl: 'Zgoda jest wymagana',
                    en: 'Consent is required'
                }
            });
        }

        if (!validateEmail(body.email)) {
            errors.push({
                name: 'email',
                message: {
                    pl: 'Nieprawidłowy adres email',
                    en: 'Invalid email address'
                }
            });
        }

        if (!validateName(body.name)) {
            errors.push({
                name: 'name',
                message: {
                    pl: 'Nieprawidłowe imię',
                    en: 'Invalid name'
                }
            });
        }

        if ((body.message?.trim()?.length || 0) < 10 || body.message?.trim()?.length > 2000) {
            errors.push({
                name: 'message',
                message: {
                    pl: 'Treść wiadomości jest za długa lub za krótka',
                    en: 'The message content is too long or too short'
                }
            });
        }

        if (errors.length > 0) {
            return new Response(JSON.stringify({ ok: false, errors }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const resend = new Resend(import.meta.env.RESEND_API_KEY);

        const emailOptions: Parameters<typeof resend.emails.send>[0] = {
            from: import.meta.env.EMAIL_FROM || 'Acme <onboarding@resend.dev>',
            to: import.meta.env.EMAIL_TO,
            replyTo: body.email,
            subject: 'test',
            html: `<p>${escapeHTML(body.message)}</p>`,
        };

        const { data, error } = await resend.emails.send(emailOptions);

        if (error) {
            console.error('Resend error:', error);
            throw new Error(error.message);
        }

        return new Response(JSON.stringify({
            ok: true,
            message: {
                pl: 'Sygnał wysłany!',
                en: 'Signal sent!'
            },
            id: data?.id
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({
            ok: false, message: {
                pl: 'Wystąpił nieoczekiwany błąd',
                en: 'An unexpected error occurred'
            }
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

function validateEmail(email: string): boolean {
    const emailRegex = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;
    return emailRegex.test(email);
}

function validateName(name: string): boolean {
    return /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/.test(name);
}