interface Project {
    date: Date,
    img: string,
    link: string,
    title: {
        pl: string,
        en: string
    },
    description: {
        pl: string,
        en: string
    },
    tags: {
        pl: string,
        en: string
    }[]
};

interface Projects extends Array<Project>{};

export const projects: Projects = [
    {
        date: new Date('2026.08.15'),
        img: 'Beast Mark',
        link: 'https://beastmark.pl/',
        title: {
            pl: 'Beast Mark',
            en: 'Beast Mark'
        },
        description: {
            pl: 'Sklep e-commerce z elektroniką obserwacyjną budowany od podstaw na Shopify Liquid, z integracją GA4, Meta Pixel, opiniami Judge.me i autorskim modułem rekomendacji produktów.',
            en: 'E-commerce store for spy/surveillance electronics, built from scratch on Shopify Liquid with GA4, Meta Pixel, Judge.me reviews, and a custom "Frequently Bought With" recommendation module.'
        },
        tags: [
            {
                pl: 'Shopify',
                en: 'Shopify'
            },
            {
                pl: 'Liquid',
                en: 'Liquid'
            }
        ]
    },
];