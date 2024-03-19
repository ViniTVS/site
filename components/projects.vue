<script setup lang="ts">

const { t } = useI18n({
  useScope: 'local'
});

let theme: Ref<string> = ref("light");


onMounted(() => {

  window.addEventListener('theme-changed', (event) => {
    theme.value = event.detail.storage;
  });

});
</script>

<template>
  <h2>{{ t('projects') }}</h2>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 my-8 ">
    
    <div class="card-container">
      <!-- link(s) -->
      <div class="text-secondary-content">
        <div class="mb-2 mx-2 links right-0">
          <a href="https://visualso.vercel.app/">
            <Icon name="ph:github-logo-duotone" />
          </a>
        </div>
      </div>
      <!-- card content -->
      <div class="bg-secondary text-secondary-content rounded-3xl">
        <div class="mx-4 mt-4 info text-center">
          <h3>{{ t('practice.title') }}</h3>
          {{ t('practice.desc') }}
        </div>

        <!-- code mockup -->
        <div class="w-5/6 sm:w-11/12 sm:mt-8 hover-animate-t">
          <img src="/ArduinoUno.svg" class="mx-auto" style="height: 50vh;" />
        </div>
      </div>
    </div>

    <div class="card-container">
      <!-- link(s) -->
      <div class="text-accent-content">
        <div class="mb-2 mx-2 links left-0 ">
          <Icon name="ph:github-logo-duotone" />
          <a href="https://visualso.vercel.app/">
            <Icon name="ph:arrow-square-out-duotone" />
          </a>
        </div>
      </div>
      <!-- card content -->
      <div class="bg-accent text-accent-content rounded-3xl">
        <div class="mx-4 mt-4 info text-center">
          <h3>{{ t('tcc.title') }}</h3>
          {{ t('tcc.desc') }}
        </div>
        <!-- browser page -->
        <div class="w-5/6 sm:w-11/12 ml-auto mt-8 hover-animate-l">
          <div class="mockup-browser border bg-base-300 text-base-content">
            <div class="mockup-browser-toolbar">
              <div class="input">https://visualso.vercel.app</div>
            </div>
            <div class="bg-base-200 w-full">
              <img alt="ViSO" :src="'/viso-' + theme + '.png'" class="w-full hidden sm:block crop-h" />
              <img alt="ViSO" :src="'/viso-mobile-' + theme + '.png'" class="w-full block sm:hidden crop-v" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card-container ">
      <!-- link(s) -->
      <div class="text-primary-content">
        <div class="mb-2 mx-2 links right-0">
          <a href="https://visualso.vercel.app/">
            <Icon name="ph:github-logo-duotone" />
          </a>
        </div>
      </div>
      <!-- card content -->
      <div class="bg-primary text-primary-content rounded-3xl">
        <div class="mx-4 mt-4 info text-center">
          <h3>{{ t('practice.title') }}</h3>
          {{ t('practice.desc') }}
        </div>

        <!-- code mockup -->
        <div class="w-5/6 sm:w-11/12 mt-8 hover-animate-r">
          <img src="/code.png" class="rounded-2xl" />
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.links {
  z-index: 2;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 2.2rem;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
}

.crop-h {
  top: 0;
  object-fit: cover;
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
}

.crop-v {
  top: 0;
  object-fit: cover;
  display: none;

  @media (max-width: 600px) {
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

.hover-animate-l {
  transition: transform 250ms;
  margin-right: -10px;

  &:hover {
    transform: translate(-10px, -10px);
  }
}

.hover-animate-r {
  transition: transform 250ms;
  margin-left: -10px;

  &:hover {
    transform: translate(10px, -10px);
  }
}
.hover-animate-t {
  transition: transform 250ms;

  &:hover {
    transform: translate(0px, -10px);
  }
}

.card-container {
  position: relative;
  height: 50vh;

  >div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
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