<script setup lang="ts">
import { format } from "date-fns";

const { locale } = useI18n();
const { t, te } = useI18n({
  useScope: 'local'
})

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
        <h4> 2023~{{ t('present') }} </h4>
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