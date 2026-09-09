export interface Milestone {
    start: Date,
    end?: Date,
    badge: {
        pl: string,
        en: string
    },
    title: {
        pl: string,
        en: string
    },
    place: {
        pl: string,
        en: string
    },
    description: {
        pl: string,
        en: string
    }
};

interface Milestones extends Array<Milestone>{};

export const milestones: Milestones = [
    {
        start: new Date('01.10.2021'),
        end: new Date('01.03.2025'),
        badge: {
            pl: 'Edukacja',
            en: 'Education'
        },
        title: {
            pl: 'Informatyka, studia inżynierskie',
            en: 'Informatyka, studia inżynierskie'
        },
        description: {
            pl: 'Algorytmy, grafika komputerowa, biblioteki i frameworki frontendowe, projektowanie interfejsów, inżynieria oprogramowania, programowanie komponentowe, programowanie platform mobilnych, bazy danych, projektowanie aplikacji. Praca inżynierska jako aplikacja webowa do zarządzania wizytami w gabinetach dentystycznych z wykorzystaniem nowoczesnych narzędzi jak JWT, React, Node.js.',
            en: '',
        },
        place: {
            pl: 'Politechnika Koszalińska',
            en: ''
        }
    },
    {
        start: new Date('01.10.2022'),
        end: new Date('01.04.2025'),
        badge: {
            pl: 'Kariera',
            en: 'Career'
        },
        title: {
            pl: 'Frontend developer, Email developer',
            en: 'Frontend developer, Email developer'
        },
        description: {
            pl: 'Projektowanie i rozwój REST API oraz systemów backendowych, integracje z zewnętrznymi serwisami (dane produktowe, cenowe), automatyczne dopasowywanie ofert. Komponenty frontendowe i backendowe: konfiguratory produktów, formularze kontaktowe, widgety, systemy śledzenia użytkowników. Złożone zapytania SQL (JOINy, subqueries, indeksowanie) w systemach dopasowywania danych. Wzorce projektowe (MVC, Repository, Factory, Singleton), zasady SOLID, DRY, KISS.',
            en: 'REST API design and backend systems development, integrations with external services (product and pricing data), automated offer matching. Frontend and backend components: product configurators, contact forms, widgets, user-tracking systems. Complex SQL queries (joins, subqueries, indexing) for data-matching systems. Design patterns (MVC, Repository, Factory, Singleton), SOLID, DRY, and KISS principles.',
        },
        place: {
            pl: 'Sun Group',
            en: 'Sun Group'
        }
    },
    {
        start: new Date('01.04.2025'),
        badge: {
            pl: 'Kariera',
            en: 'Career'
        },
        title: {
            pl: 'Senior frontend developer, Email developer',
            en: 'Senior frontend developer, Email developer'
        },
        description: {
            pl: 'Automatyzacja procesów kampanijnych. Dostępny szablon LP zgodny z WCAG 2.2, implementacja w czystym JavaScript, współpraca z klientem od koncepcji po wdrożenie. Bezpośrednia współpraca z klientem: zbieranie wymagań, propozycje rozwiązań technicznych, iteracyjne dostarczanie funkcjonalności. Optymalizacja kodu pod kątem wydajności i responsywności.',
            en: 'Campaign process automation. Accessible landing page template compliant with WCAG 2.2, built in vanilla JavaScript, delivered in direct collaboration with the client from concept to launch. Direct client collaboration: requirements gathering, proposing technical solutions, iterative feature delivery. Code optimization for performance and responsiveness.',
        },
        place: {
            pl: 'Sun Group',
            en: 'Sun Group'
        }
    }
];