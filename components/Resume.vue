<script setup lang="ts">

// const { locale } = useI18n();
const { t, te, locale } = useI18n({
  useScope: 'local'
})

interface Experience {
  tech: Array<string>;
  position: string;
  time: string;
  local: string;
}

let exp: Array<Experience> = [
  {
    tech: ['PHP', 'MySQL/MariaDB', 'JavaScript', 'Vue.js', 'Docker'],
    position: 'intern',
    time: '2021 ~ 2023',
    local: 'SPRO IT Solutions',
  },
  {
    tech: ['PHP', 'MySQL/MariaDB', 'JavaScript', 'Vue.js', 'Laravel', 'Flutter', 'Python', 'GraphQL', 'Docker'],
    position: 'fullstack',
    time: '2023 ~ now',
    local: 'SPRO IT Solutions',
  },
];

interface TextReplace {
  text: string;
  replace: string;
}

const replace_array: Array<TextReplace> = [
  {
    text: '\\n',
    replace: '<br>'
  },
  {
    text: '\\se',
    replace: '</span>'
  },
  {
    text: '\\s',
    replace: '<span class="underline decoration-primary decoration-wavy">'
  },
];

function insertHTML(original: string, tr: Array<TextReplace>): string {
  var new_text = original;
  for (let item of tr) {
    new_text = new_text.replaceAll(item.text, item.replace);
  }
  return new_text;
}

const present_span = '<span class="text-primary">';

let hidden = ref(true);

function browserResized() {
  if (window.innerWidth > 1536) {
    hidden.value = false;
  }
}

onMounted(() => {
  browserResized();
  window.addEventListener('resize', browserResized);
})

function formatDescription(description: string | Array<string>): string {
  console.log(description);
  if (typeof description === 'string') {
    return description;
  } else {
    return description.map((x) => insertHTML(x, replace_array)).join('<br>');
  }
}

</script>

<template>
  <h2>{{ t('work') }}</h2>
  <div class="flex flex-col lg:flex-row gap-4">
    <!-- short about  -->
    <div
      class="col-span-2 transition-all duration-300"
      :class="hidden ? 'lg:w-7/12' : 'lg:w-3/12'"
    >
      <h5 class="text-primary"> {{ t('dev') }} </h5>
      <p
        class="mb-2"
        v-html="insertHTML(t('about'), replace_array)"
      />
    </div>
    <!-- divider -->
    <div class="divider lg:hidden" />
    <div class="divider divider-horizontal hidden lg:flex">
      <button
        class="btn btn-primary btn-circle btn-sm"
        @click="() => hidden = !hidden"
      >
        <Icon
          :name="hidden ? 'ph:caret-left' : 'ph:caret-right'"
          class="w-5 h-5"
        />
      </button>
    </div>
    <!-- jobs -->
    <div
      class="col-span-3 flex flex-col-reverse gap-4 transition-all duration-300 teste"
      :class="hidden ? 'lg:w-4/12' : 'lg:w-8/12'"
    >
      <div
        v-for="xp in exp"
        class="flex flex-col gap-2 overflow-hidden"
      >
        <div class="flex flex-row gap-2">
          <!-- date interval -->
          <div style="min-width: 7rem;">
            <h5 v-html="xp.time.replace('now', present_span + $t('present') + '</span>')" />
          </div>
          <!-- description -->
          <div class="grow">
            <h5 class="lg:text-right"> {{ t(xp.position + '.title') }} </h5>
            <h6 :class="hidden ? 'lg:hidden' : ''"> {{ xp.local }} </h6>
            <p
              class="wrap-break-word"
              :class="hidden ? 'lg:hidden' : ''"
              :id="xp.position"
              v-html="insertHTML(t(xp.position + '.description'), replace_array)"
            />
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-2 mt-2">
          <div
            v-for="tech in xp.tech"
            class="badge badge-primary hover:badge-outline cursor-pointer"
          > {{ tech }}
          </div>
        </div>
      </div>
    </div>

  </div>

</template>


<style scoped>
h5 {
  font-weight: 600;
}

h6 {
  font-weight: 500;
}

#work>div {
  height: 70vh;

}

@media (min-width: 768px) {
  .experience {
    position: relative;
  }

  .fixed-ct {
    position: sticky;
    top: 90px;
  }
}
</style>


<i18n lang="json">{
  "pt": {
    "about": "Atuo profissionalmente com \\sdesenvolvimento web\\se desde 2021, com experiência em PHP, Vue.js e jQuery, bancos de dados MySQL e GraphQL, além de desenvolvimento de aplicativos com Flutter. Também possuo vivência em processos de engenharia de software, atuando de forma estruturada no desenvolvimento e manutenção de sistemas. \\n Sou bacharel em Ciência da Computação pela Universidade Federal do Paraná (UFPR). Lá aprendi sobre o processo de pesquisa, desenvolvimento e engenharia de software.",
    "work": "Experiência",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "dev": "Desenvolvedor Fullstack",
    "intern": {
      "title": "Estágio Desenvolvedor Fullstack",
      "description": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal."
    },
    "fullstack": {
      "title": "Desenvolvedor Fullstack",
      "description": "Experiência no desenvolvimento de sistemas ERP, APIs em PHP/Laravel e interfaces web responsivas com Vue.js e JavaScript, integrando front-end e back-end e conectando sistemas a plataformas de terceiros. \\n Atuação em aplicativos mobile com Flutter, automação de processos e relatórios com Power Automate, ExcelScript e Python, participando de todas as etapas do ciclo de desenvolvimento, do levantamento de requisitos à documentação técnica."
    }
  },
  "en": {
    "about": "I'm a fullstack developer with experience in \\sVue\\se, \\sPHP\\se and \\sMariaDB\\se and Bachelor of Computer Science. I like to create projects and try new technologies and different areas of development.",
    "work": "Experience",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "dev": "Fullstack Developer",
    "intern": {
      "title": "Fullstack Developer Intern",
      "description": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal."
    },
    "fullstack": {
      "title": "Fullstack Developer",
      "description": "Experience in ERP system development, building APIs with PHP/Laravel and responsive web interfaces using Vue.js and JavaScript, ensuring seamless front-end and back-end integration and third-party system connectivity. \\n Background in mobile app development with Flutter, process and report automation using Power Automate, ExcelScript, and Python, with involvement across the full software development lifecycle, from requirements gathering to technical documentation."
    }
  },
  "de": {
    "about": "Ich bin ein Fullstack-Entwickler mit Erfahrung in \\sVue\\se, \\sPHP\\se und \\sMariadb\\se und Bachelor of Information. Ich mag es, Projekte zu erstellen und neue Technologien und verschiedene Entwicklungsbereiche auszuprobieren.",
    "work": "Erfahrung",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "dev": "Fullstack Developer",
    "intern": {
      "title": "Fullstack Developer Intern",
      "description": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal."
    },
    "fullstack": {
      "title": "Fullstack Developer",
      "description": "Experiência sólida no desenvolvimento e manutenção de sistemas ERP, com foco na criação de APIs robustas em PHP e Laravel, utilizando bancos de dados SQL e GraphQL para integração de dados, consumo por sistemas inteligentes e comunicação com plataformas de terceiros. Atuação também no desenvolvimento de interfaces de usuário complexas e responsivas, empregando Vue.js, jQuery e JavaScript, garantindo integração eficiente entre front-end e back-end por meio do Axios. \\n Vivência no desenvolvimento de aplicativos mobile híbridos com Flutter, incluindo recursos como câmera, notificações push e armazenamento local, além de forte atuação em automação de relatórios e processos internos com Microsoft Power Automate, ExcelScript (TypeScript) e Python. Participação completa no ciclo de desenvolvimento de software, desde o levantamento de requisitos com usuários e stakeholders até o desenho técnico, documentação de regras de negócio e criação de instruções de trabalho."
    }
  }
}</i18n>