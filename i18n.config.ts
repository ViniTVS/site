export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  messages: {
    pt: {
      welcome: 'Bem-vindo',
      projects: "Projetos",
      resume: "Currículo",
      home: "Início",
      about: "Sobre mim",
      uni: "Universidade",
      more: "Mais",
      present: "Atualmente",
      footer: {
        title: "Entre em contato",
        text: "Caso se interesse em meus serviços ou tenha dúvidas, minha caixa de e-mail está sempre aberta:"
      }
    },
    en: {
      welcome: 'Welcome',
      projects: "Projects",
      resume: "Resume",
      home: "Home",
      about: "About me",
      uni: "University",
      more: "More",
      footer: {
        title: "Contact me",
        text: "If you are interested in my services or have questions, my email box is always open:"
      }
    },
    de: {
      welcome: 'Willkommen',
      projects: "Projekte",
      resume: 'Resümee',
      home: "Home",
      about: "Über mich",
      uni: "Universität",
      more: "Mehr",
      present: "Gegenwart",
      footer: {
        title: "Kontakt",
        text: "Wenn Sie an meinen Dienstleistungen interessiert sind oder Fragen haben, steht Ihnen mein E-Mail-Postfach jederzeit zur Verfügung:"
      }
    }
  }
}))
