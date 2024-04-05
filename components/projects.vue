<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy';

const { t } = useI18n({
  useScope: 'local'
});

let theme: Ref<string> = ref("light");

// onMounted(() => {
//   theme.value = localStorage.getItem("theme") ?? "light";
//   window.addEventListener('theme-changed', (event) => {
//     theme.value = event.detail.storage;
//   });
// });

</script>

<template>
  <h2>{{ t('projects') }}</h2>

  <div class="w-full projects">
    <div class="h-screen flex overlap-container">
      <div class="w-full grid grid-cols-2 place-content-between">
        <div class="justify-self-start">
          <img src="/esp32.svg" class="h-24 md:h-32" />
        </div>
        <div class="justify-self-end">
          <img src="/c.svg" class="h-24 md:h-32" />
        </div>
        <div class="justify-self-start">
          <img src="/rust.svg" class="h-24 md:h-32" />
        </div>
        <div class="justify-self-end">
          <img src="/ArduinoUno.svg" class="h-24 md:h-32" />
        </div>
      </div>

      <div class="h-full grow place-content-center text-center vertical-center">
        <div class="m-auto">
          <h3>{{ t('practice.title') }}</h3>
          {{ t('practice.desc') }}
        </div>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
.projects {
  >div {
    height: 75svh;

    @media (max-width: 600px) {
      height: 100svh;
    }
  }
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.overlap-container {
  height: 100vh;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

img {
  z-index: -10;
}
</style>

<i18n lang="json">{
  "pt": {
    "projects": "Projetos e Trabalhos",
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
      "desc": "ViSO foi o projeto do meu TCC. É um site cujo objetivo é ilustrar e animar algoritmos utilizados em sistemas operacionais. Esperamos que sirva como base para trabalhos futuros de outros alunos."
    }
  },
  "en": {
    "projects": "Projects",
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
      "desc": "ViSO was my final paper project. It is a website whose objective is to illustrate and animate algorithms used in operating systems. Hopefully, it will serve as a basis for future projects for other students. (Portuguese only)"
    }
  },
  "de": {
    "projects": "Projekte und Werke",
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
      "desc": "ViSO war mein Abschlussprojekt. Es ist eine Website, deren Ziel es ist, Algorithmen, die in Betriebssystemen verwendet werden, zu veranschaulichen und zu animieren. Hoffentlich wird es als Grundlage für zukünftige Arbeiten für andere Studenten dienen. (Nur auf Portugiesisch)"
    }
  }
}</i18n>