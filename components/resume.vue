<script setup lang="ts">
import { format } from "date-fns";

const { locale } = useI18n();
const { t, te } = useI18n({
  useScope: 'local'
})

function getYearFloat(date: Date): number {
  return parseFloat(format(date, 'yyyy')) + parseFloat(format(date, 'M')) / 12;
}

interface Exp {
  desc: string,
  title: string,
  start: Date,
  end: Date,
  color: string
}
const today = new Date();

let exps: Ref<Array<Exp>> = ref([
  {
    desc: "UFPR",
    title: "degree",
    start: new Date("2018-02-12"),
    end: new Date("2023-11-20"),
    color: 'bg-accent text-primary-content'
  },
  {
    desc: "SPRO IT Solutions",
    title: "intern",
    start: new Date("2021-03-11"),
    end: new Date("2023-03-11"),
    color: 'bg-secondary text-primary-secondary'
  },
  {
    desc: "SPRO IT Solutions",
    title: "junior_full",
    start: new Date("2023-03-11"),
    end: today,
    color: 'bg-primary text-primary-primary'
  },
]);

</script>

<template>
  <h3>{{ t('work') }}</h3>

</template>


<style lang="scss" scoped>
h3 {
  font-weight: 700;
}

</style>


<i18n lang="json">{
  "pt": {
    "work": "Trabalho",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "intern": "Estagiário Desenvolvedor Fullstack",
    "junior_full": "Dev. Fullstack Júnior"
  },
  "en": {
    "work": "Work",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Dev."
  },
  "de": {
    "work": "Arbeit",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Dev."
  }
}</i18n>