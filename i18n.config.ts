export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pt',
    messages: {
        pt: {
            welcome: 'Bem-vindo',
        },
        en: {
            welcome: 'Welcome',
            "personal_page": "Personal page",
            "close": "Close",
            "footer": {
              "title": "Contact me",
              "text": "If you are interested in my services or have questions, my email box is always open:"
            },
        },
        de: {
            welcome: 'Willkommen',
            personal_page: "Persönliche Seite",
            close: "Schließen",
            title: "Persönliche Seite",
            about: "Über mich",
            experience: "Erfahrung",
            projects: "Projekte",
            contact: "Kontakt",
            select_language: "Sprache auswählen:",
            language: "Sprache",
            modal_info: "Sie können die Sprache im Menü oben auf der Seite ändern.",
            footer: {
                title: "Kontakt",
                text: "Wenn Sie an meinen Dienstleistungen interessiert sind oder Fragen haben, steht Ihnen mein E-Mail-Postfach jederzeit zur Verfügung:"
            },
        }
    }
}))
