<script setup lang="ts">

interface Project {
  link: string,
  name: string
}

const { t } = useI18n({
  useScope: 'local'
});

interface Background {
  variable: string,
  name: string
}

const backgrounds: Array<Background> = [
  { name: "primary", variable: "oklch(var(--p))" },
  { name: "accent", variable: "oklch(var(--a))" },
  { name: "secondary", variable: "oklch(var(--s))" },
  { name: "neutral", variable: "oklch(var(--n))" },
];

const projects: Ref<Array<Project>> = ref([
  {
    link: "https://github.com/ViniTVS/site",
    name: "arduino"
  },
  {
    link: "https://github.com/stars/ViniTVS/lists/ci%C3%AAncia-da-computa%C3%A7%C3%A3o",
    name: "tcc",
  },
  {
    link: "https://github.com/ViniTVS/codewars",
    name: "practice"
  },
]);

onMounted(() => {

})
</script>

<template>
  <div class="bg-accent rounded-3xl h-96" style="overflow: hidden;">
    <div class="mx-4 mt-4 info">
      <h3>{{ t('tcc.title') }}</h3>
      {{ t('tcc.desc') }}
    </div>
    <div class="w-11/12 sm:w-5/6 ml-auto mr-0 xl:w-4/6 mt-8" style="overflow:hidden;">
      <div class="mockup-browser border bg-base-300" style=" width: 100vw; max-width: 1080px; overflow:hidden;">
        <div class="mockup-browser-toolbar">
          <div class="input">https://visualso.vercel.app/</div>
        </div>
        <div class="bg-base-200">
          <img alt="Headshot" src="/viso-dark.png" id="viso" class="w-full hidden sm:block crop-h" />
          <img alt="Headshot" src="/viso-mobile-dark.png" id="viso" class="w-full block crop-v" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.crop-h {
  top: 0;
  width: 100vw;
  min-width: 720px;
  max-width: 1080px;
  object-fit: cover;
  display: block;

  @media (max-width: 428px) {
    display: none;
  }
}

.crop-v {
  top: 0;
  width: 100vw;
  min-width: 720px;
  max-width: 1080px;
  object-fit: cover;
  display: none;

  @media (max-width: 428px) {
    display: block;
  }
}

.info {
  >h3 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: bold;
  }
}
</style>

<i18n lang="json">{
  "pt": {
    "work": "Trabalho",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "practice": {
      "title": "Coding practice",
      "desc": "Um repositório com meus códigos para solução de desafios de código na prática de sites como LeetCode, Codewars, HackerRank, etc."
    },
    "arduino": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "ViSO",
      "desc": "ViSO foi o projeto do meu TCC em dupla. É um site cujo objetivo é ilustrar e animar algoritmos utilizados em sistemas operacionais que esperamos servir como base de trabalhos futuros para outros alunos."
    }
  },
  "en": {
    "work": "Work",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "practice": {
      "title": "Coding practice",
      "desc": "A repository with my codes for solving practical code challenges on sites like LeetCode, Codewars, HackerRank, etc."
    },
    "arduino": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "ViSO",
      "desc": "ViSO was my Final paper project. It is a website whose objective is to illustrate and animate algorithms used in operating systems that we hope will serve as a basis for future work for other students."
    }
  },
  "de": {
    "work": "Arbeit",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "practice": {
      "title": "Codierungspraxis",
      "desc": "Ein Repository mit meinen Codes zum Lösen praktischer Code-Herausforderungen auf Websites wie LeetCode, Codewars, HackerRank usw."
    },
    "arduino": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "ViSO",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    }
  }
}</i18n>