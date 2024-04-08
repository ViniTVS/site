<script setup lang="ts">

const { t } = useI18n({
  useScope: 'local'
});

let theme: Ref<string> = ref("light");

onMounted(() => {
  theme.value = localStorage.getItem("theme") ?? "light";
  window.addEventListener('theme-changed', (event) => {
    theme.value = event.detail.storage;
  });
});

</script>

<template>
  <h2>{{ t('projects') }}</h2>
  <div class="w-full projects">
    <!-- ViSO -->
    <div class="h-full flex flex-col my-4 rounded-2xl bg-primary text-primary-content">
      <div class="center text-center grow">
        <h3>{{ t('tcc.title') }}</h3>
        {{ t('tcc.desc') }}
      </div>
      <!-- browser page -->
      <a href="https://visualso.vercel.app" style="height: 50%;">
        <div class="w-110 ml-8 mx-auto hover-animate">
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
      </a>
    </div>

    <!-- VSSS -->
    <div class="h-full flex flex-col my-4 rounded-2xl bg-accent text-accent-content">
      <div class="center text-center grow">
        <h3>{{ t('vsss.title') }}</h3>
        {{ t('vsss.desc') }}
        <div class="flex flex-row icons">
          <a href="https://github.com/ViniTVS/VSSS">
            <Icon name="line-md:github" />
          </a>
        </div>
      </div>
      <!-- browser page -->
      <div>

      </div>
    </div>


    <div
      class="grid grid-cols-2 grid-rows-5 md:grid-rows-4 gap-10 my-4 p-4 rounded-2xl bg-secondary text-secondary-content">
      <div>
        <img src="/esp32.svg" class="mr-auto floating" />
      </div>
      <div>
        <img src="/c.svg" class="ml-auto floating" style="animation-delay: -2s;" />
      </div>
      <div class="col-span-2 row-span-3 md:row-span-2 center text-center grow">
        <h3>{{ t('arduino.title') }}</h3>
        {{ t('arduino.desc') }}
        <div class="flex flex-row icons">
          <a href="https://visualso.vercel.app/">
            <Icon name="line-md:github-loop" />
          </a>
        </div>
      </div>
      <div>
        <img src="/rust.svg" class="mr-auto floating" style="animation-delay: -3s;" />
      </div>
      <div>
        <img src="/ArduinoUno.svg" class="ml-auto floating" style="animation-delay: -1s;" />
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.w-110 {
  width: 100vw;
}

.projects {

  >div {
    height: 80svh;
    font-size: 1.25rem;
    line-height: 1.75rem;
    overflow: hidden;
  }

  h3 {
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
  }
}

.icons {
  font-size: 1.75em;

}

.paused {
  animation-play-state: paused;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}

img {
  z-index: -10;
}

.hover-animate {
  transition: transform 250ms;

  &:hover {
    transform: translate(0px, -10px);
  }
}

.floating {
  height: 100%;
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}


@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }

  50% {
    transform: translate(0, 12px);
  }

  100% {
    transform: translate(0, -0px);
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
      "title": "IoT",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "ViSO",
      "desc": "ViSO foi o projeto do meu TCC. É um site cujo objetivo é ilustrar e animar algoritmos utilizados em sistemas operacionais. Esperamos que sirva como base para trabalhos futuros de outros alunos."
    },
    "uni": {
      "title": "ViSO",
      "desc": "ViSO foi o projeto do meu TCC. É um site cujo objetivo é ilustrar e animar algoritmos utilizados em sistemas operacionais. Esperamos que sirva como base para trabalhos futuros de outros alunos."
    },
    "vsss": {
      "title": "Iniciação Científica",
      "desc": "Desenvolvimento do firmware do robô para o formato de competição Very Small Size Soccer e sua base de comunicação feito juntamente com colegas da universidade utilizando dispositivos Arduino."
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
      "title": "IoT",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "ViSO",
      "desc": "ViSO was my final paper project. It is a website whose objective is to illustrate and animate algorithms used in operating systems. Hopefully, it will serve as a basis for future projects for other students. (Portuguese only)"
    },
    "uni": {
      "title": "ViSO",
      "desc": "ViSO foi o projeto do meu TCC. É um site cujo objetivo é ilustrar e animar algoritmos utilizados em sistemas operacionais. Esperamos que sirva como base para trabalhos futuros de outros alunos."
    },
    "vsss": {
      "title": "Scientific Research",
      "desc": "Firmware development for the Very Small Size Soccer competition format robots and its communication base implemented along with university colleagues using Arduino devices."
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
      "title": "IoT",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "ViSO",
      "desc": "ViSO war mein Abschlussprojekt. Es ist eine Website, deren Ziel es ist, Algorithmen, die in Betriebssystemen verwendet werden, zu veranschaulichen und zu animieren. Hoffentlich wird es als Grundlage für zukünftige Arbeiten für andere Studenten dienen. (Nur auf Portugiesisch)"
    },
    "uni": {
      "title": "ViSO",
      "desc": "ViSO foi o projeto do meu TCC. É um site cujo objetivo é ilustrar e animar algoritmos utilizados em sistemas operacionais. Esperamos que sirva como base para trabalhos futuros de outros alunos."
    },
    "vsss": {
      "title": "Wissenschaftliche Forschung",
      "desc": "Firmware-Entwicklung für die Roboter im Very Small Size Soccer-Wettbewerbsformat und ihre Kommunikationsbasis, implementiert zusammen mit Universitätskollegen unter Verwendung von Arduino-Geräten."
    }
  }
}</i18n>