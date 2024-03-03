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
  <div class="flex flex-row justify-between flex-wrap">
    <!-- text -->
    <div v-for="(project, i) in  projects " class="mb-8 p-6" :key="'project-' + i">
      <a :href=project.link target="_blank" rel="noreferrer"
        class="underline "
        :style="'text-decoration-color:' + backgrounds[i % backgrounds.length].variable">
        {{ t(project.name + ".title") }}
      </a>
      <div>{{ t(project.name + ".desc") }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
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
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
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
      "title": "Codewars",
      "desc": "Codewars is a website to train and develop logic and programming language skills with code practice challenges. Here you will find a repository with my solutions."
    }
  }
}</i18n>