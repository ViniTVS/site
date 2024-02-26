<script setup lang="ts">

interface Project {
  link: string,
  name: string
}
const { locale } = useI18n();
const { t } = useI18n({
  useScope: 'local'
})

const backgrounds = [
  ""
];

const projects: Ref<Array<Project>> = ref([
  {
    link: "https://github.com/ViniTVS/codewars",
    name: "codewars"
  },
  {
    link: "https://github.com/ViniTVS/site",
    name: "arduino"
  },
  {
    link: "https://github.com/stars/ViniTVS/lists/ci%C3%AAncia-da-computa%C3%A7%C3%A3o",
    name: "tcc",
  },
]);

onMounted(() => {

})
</script>

<template>
  <div class="flex flex-row justify-between flex-wrap">
    <a v-for="(project, index) in projects" :href=project.link target="_blank" rel="noreferrer"
      class="project-showcase mb-8 p-6" :class="'bg-' + (index % 5).toString()" :key="index">
      <!-- text -->
      <div>
        <h2>{{ t(project.name + ".title") }}</h2>
        <div>{{ t(project.name + ".desc") }}</div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
#projects {
  padding-top: 90px;
}

.project-showcase {
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.icon-svg {
  margin: auto;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  font-size: 24px;
}
.bg-0 {
	background: linear-gradient(135deg, oklch(var(--p) / 0.2) 10%, oklch(var(--p)));
}
.bg-1 {
	background: linear-gradient(135deg, oklch(var(--a) / 0.2) 10%, oklch(var(--a)));
}
.bg-2 {
	background: linear-gradient(135deg, oklch(var(--in) / 0.2) 10%, oklch(var(--in)));
}
.bg-3 {
	background: linear-gradient(135deg, oklch(var(--in) / 0.2) 10%, oklch(var(--in)));
}
.bg-4 {
	background: linear-gradient(135deg, oklch(var(--su) / 0.2) 10%, oklch(var(--su)));
}
</style>

<i18n lang="json">
{
  "pt": {
    "work": "Trabalho",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "codewars": {
      "title": "Codewars",
      "desc": "Codewars é um site para treinar e desenvolver habilidades de lógica e linguagens de programação com desafios de prática de código.  Aqui você encontra um repositório com minhas soluções."
    },
    "arduino": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    }
  },
  "en": {
    "work": "Work",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "codewars": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "arduino": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    }
  },
  "de": {
    "work": "Arbeit",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "codewars": {
      "title": "Codewars",
      "desc": "Codewars ist eine Website zum Trainieren und Entwickeln von Logik- und Programmiersprachen Kenntnisse mit Code-Übungsherausforderungen. Hier finden Sie ein Repository mit meinen Lösungen."
    },
    "arduino": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    },
    "tcc": {
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    }
  }
}
</i18n>