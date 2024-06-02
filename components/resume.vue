<script setup lang="ts">

const { locale } = useI18n();
const { t, te } = useI18n({
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

const present_span = '<span class="text-primary">';
const under_start = '<span class="underline decoration-primary decoration-wavy">';
const under_end = '</span>';

</script>

<template>
  <h2>{{ t('work') }}</h2>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4 experience">

    <!-- jobs -->
    <div class="col-span-3 flex flex-col-reverse gap-4 order-3 md:order-1">
      <div v-for="xp in exp" class="flex flex-row gap-2">
        <!-- date interval -->
        <div style="min-width: 7rem;">
          <h5 v-html="xp.time.replace('now', present_span + $t('present') + '</span>')"> </h5>
        </div>
        <!-- description -->
        <div class="grow">
          <h5> {{ t(xp.desc) }} </h5>
          <h6> {{ xp.local }} </h6>
          <p class="break-words">
            {{ xp.points.map((x) => t(x)).join(' ') }}
          </p>
          <div class="flex flex-row flex-wrap gap-2 mt-2">
            <div v-for="tech in xp.tech" class="badge badge-primary hover:badge-outline "> {{ tech }} </div>
          </div>
        </div>
      </div>
    </div>
    <!-- short about  -->
    <div class="col-span-2 fixed-ct md:h-20 md:mb-16 order-2">
      <p class="mb-2"
        v-html="t('about').replaceAll('\n', '<br>').replaceAll('\\s', under_start).replaceAll('\\e', under_end)"> </p>
    </div>
  </div>

</template>


<style lang="scss" scoped>
h5 {
  font-weight: 600;
}

h6 {
  font-weight: 500;
}

#work {
  >div {
    height: 70vh;
  }
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
    "about": "Sou desenvolvedor fullstack com experiência em \\sVue\\e, \\sPHP\\e e \\sMariaDB\\e e bacharel em Ciência da Computação. Gosto de criar projetos e testar novas tecnologias e diferentes áreas de desenvolvimento.",
    "work": "Experiência",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "intern": "Estágio Desenvolvedor Fullstack",
    "junior_full": "Desenvolvedor Fullstack Júnior",
    "job": {
      "spro_internal": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal.",
      "report": "Criação e automação de relatórios internos.",
      "apis": "Desenvolvimento e integração de APIs.",
      "mobile": "Desenvolvimento híbrido de aplicativo mobile."
    }
  },
  "en": {
    "about": "I'm a fullstack developer with experience in \\sVue\\e, \\sPHP\\e and \\sMariaDB\\e and Bachelor of Computer Science. I like to create projects and try new technologies and different areas of development.",
    "work": "Experience",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer",
    "job": {
      "spro_internal": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal.",
      "report": "Criação e automação de relatórios internos.",
      "apis": "Desenvolvimento e integração de APIs.",
      "mobile": "Desenvolvimento híbrido de aplicativo mobile."
    }
  },
  "de": {
    "about": "Ich bin ein Fullstack-Entwickler mit Erfahrung in \\sVue\\e, \\sPHP\\e und \\sMariadb\\e und Bachelor of Information. Ich mag es, Projekte zu erstellen und neue Technologien und verschiedene Entwicklungsbereiche auszuprobieren.",
    "work": "Erfahrung",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer",
    "job": {
      "spro_internal": "Desenvolvimento e manutenção do sistema interno da empresa - criação de páginas, manutenção de regras de negócio, uso de banco de dados relaiconal.",
      "report": "Criação e automação de relatórios internos.",
      "apis": "Desenvolvimento e integração de APIs.",
      "mobile": "AAAAAAAAAAAAAA bbb1"
    }
  }
}</i18n>