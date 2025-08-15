<script setup lang="ts">

// const { locale } = useI18n();
const { t, te, locale } = useI18n({
  useScope: 'local'
})

interface Experience {
  tech: Array<string>;
  desc: string;
  time: string;
  local: string;
  points: Array<string>;
}

let exp: Array<Experience> = [
  {
    tech: ['PHP', 'MySQL/MariaDB', 'JavaScript', 'Vue.js', 'Docker'],
    desc: 'intern',
    time: '2021 ~ 2023',
    local: 'SPRO IT Solutions',
    points: [
      "job.spro_internal",
      "job.report",
    ]
  },
  {
    tech: ['PHP', 'MySQL/MariaDB', 'JavaScript', 'Vue.js', 'Laravel', 'Flutter', 'Python', 'GraphQL', 'Docker'],
    desc: 'junior_full',
    time: '2023 ~ now',
    local: 'SPRO IT Solutions',
    points: [
      "job.spro_internal",
      "job.report",
      "job.apis",
      "job.mobile"
    ]
  },
];

interface TextReplace {
  text: string;
  replace: string;
}

const replace_array: Array<TextReplace> = [
  {
    text: '\n',
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

</script>

<template>
  <h2>{{ t('work') }}</h2>
  <div class="flex flex-col lg:flex-row gap-4">
    <!-- short about  -->
    <div class="col-span-2 transition-all duration-300" :class="hidden ? 'lg:w-7/12' : 'lg:w-3/12'">
      <h5 class="text-primary"> {{ t('dev') }} </h5>
      <p class="mb-2" v-html="insertHTML(t('about'), replace_array)" />
    </div>
    <!-- divider -->
    <div class="divider lg:hidden"/>
    <div class="divider divider-horizontal hidden lg:flex">
      <button class="btn btn-primary btn-circle btn-sm" @click="() => hidden = !hidden">
        <Icon :name="hidden ? 'ph:caret-left' : 'ph:caret-right'" class="w-5 h-5" />
      </button>
    </div>
    <!-- jobs -->
    <div class="col-span-3 flex flex-col-reverse gap-4 transition-all duration-300 teste"
      :class="hidden ? 'lg:w-4/12' : 'lg:w-8/12'">
      <div v-for="xp in exp" class="flex flex-col gap-2 overflow-hidden">
        <div class="flex flex-row gap-2">
          <!-- date interval -->
          <div style="min-width: 7rem;">
            <h5 v-html="xp.time.replace('now', present_span + $t('present') + '</span>')" />
          </div>
          <!-- description -->
          <div class="grow">
            <h5 class="lg:text-right"> {{ t(xp.desc) }} </h5>
            <h6 :class="hidden ? 'lg:hidden' : ''"> {{ xp.local }} </h6>
            <p class="break-words" :class="hidden ? 'lg:hidden' : ''" :id="xp.desc">
              {{ xp.points.map((x) => t(x)).join(' ') }}
            </p>
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-2 mt-2">
          <div v-for="tech in xp.tech" class="badge badge-primary hover:badge-outline cursor-pointer"> {{ tech }}
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

#work 
  >div {
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
    "about": "Sou desenvolvedor fullstack com experiência em \\sVue\\se, \\sPHP\\se e \\sMariaDB\\se e bacharel em Ciência da Computação. Gosto de criar projetos e testar novas tecnologias e diferentes áreas de desenvolvimento.",
    "work": "Experiência",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "intern": "Estágio Desenvolvedor Fullstack",
    "junior_full": "Desenvolvedor Fullstack Júnior",
    "dev": "Desenvolvedor Fullstack",
    "job": {
      "spro_internal": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal.",
      "report": "Criação e automação de relatórios internos.",
      "apis": "Desenvolvimento e integração de APIs.",
      "mobile": "Desenvolvimento híbrido de aplicativo mobile."
    }
  },
  "en": {
    "about": "I'm a fullstack developer with experience in \\sVue\\se, \\sPHP\\se and \\sMariaDB\\se and Bachelor of Computer Science. I like to create projects and try new technologies and different areas of development.",
    "work": "Experience",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer",
    "dev": "Fullstack Developer",
    "job": {
      "spro_internal": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal.",
      "report": "Criação e automação de relatórios internos.",
      "apis": "Desenvolvimento e integração de APIs.",
      "mobile": "Desenvolvimento híbrido de aplicativo mobile."
    }
  },
  "de": {
    "about": "Ich bin ein Fullstack-Entwickler mit Erfahrung in \\sVue\\se, \\sPHP\\se und \\sMariadb\\se und Bachelor of Information. Ich mag es, Projekte zu erstellen und neue Technologien und verschiedene Entwicklungsbereiche auszuprobieren.",
    "work": "Erfahrung",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer",
    "dev": "Desenvolvedor Fullstack",
    "job": {
      "spro_internal": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal.",
      "report": "Criação e automação de relatórios internos.",
      "apis": "Desenvolvimento e integração de APIs.",
      "mobile": "AAAAAAAAAAAAAA bbb1"
    }
  }
}</i18n>