<script setup lang="ts">
import { format } from "date-fns";

const { locale } = useI18n();
const { t, te } = useI18n({
  useScope: 'local'
})

function getYearFloat(date: Date): number {
  return parseFloat(format(date, 'yyyy')) + parseFloat(format(date, 'M')) / 12;
}

interface Info {
  desc: string,
  title: string,
  start: Date,
  end: Date,
  color: string
}
const today = new Date();

let xp: Ref<Array<Info>> = ref([
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

let edu: Ref<Array<Info>> = ref([
  {
    desc: "UFPR",
    title: "degree",
    start: new Date("2018-02-12"),
    end: new Date("2023-11-20"),
    color: 'bg-accent text-primary-content'
  },
]);

</script>

<template>
  <h2>{{ t('work') }}</h2>
  <div id="work" class="grid grid-cols-7 gap-8">
    <div class="col-span-7 md:col-span-3 flex flex-col rounded-2xl bg-base-300 text-base-content p-4">
      <h3> {{ t('intern') }} </h3>
      <div class="flex flex-row justify-between">
        <h4> SPRO IT Solutions </h4>
        <h4> 2021~2023 </h4>
      </div>
    </div>
    <div class="col-span-7 md:col-span-4 flex flex-col rounded-2xl bg-primary text-primary-content p-4">
      <h3> {{ t('junior_full') }} </h3>
      <div class="flex flex-row justify-between">
        <h4> SPRO IT Solutions </h4>
        <h4> 2021~{{ t('present') }} </h4>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
h3 {
  font-weight: 700;
}

#work {
  >div {
    height: 70vh;
  }
}
</style>


<i18n lang="json">{
  "pt": {
    "work": "Experiência",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "intern": "Estágio Desenvolvedor Fullstack",
    "junior_full": "Fullstack Júnior"
  },
  "en": {
    "work": "Experience",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer"
  },
  "de": {
    "work": "Erfahrung",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer"
  }
}</i18n>