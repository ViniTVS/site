<script setup lang="ts">

const { locale } = useI18n();
const { t } = useI18n({
  useScope: 'local'
})

interface Job {
  desc: { [id: string]: String },
  company: String,
  interval: String,
}

const jobs: Array<Job> = [
  {
    company: "SPRO IT Solutions",
    interval: "2021 - 2023",
    desc: {
      pt: "Estágiário Desenvolvedor Fullstack",
      de: "Fullstack Developer Intern",
      en: "Fullstack Developer Intern"
    }
  },
  {
    company: "SPRO IT Solutions",
    interval: "2023 - now",
    desc: {
      pt: "Desenvolvedor Fullstack Júnior",
      de: "Junior Fullstack Developer",
      en: "Junior Fullstack Developer"
    }
  },
];

const jobs_r = jobs.reverse();

</script>

<template>
  <div class="p-2 border-2" style="border-color: oklch(var(--a)); width: 100%;">
    <div class="flex flex-row">
      <Icon color="oklch(var(--a))" name="ph:briefcase-duotone" size="1.5rem" class="my-auto mr-2"></Icon>
      <h3> {{ t('work') }}</h3>
    </div>
    <!-- work -->
    <ul>
      <li v-for="(job, index) in jobs_r" :key="index">
        <div class="flex flex-row justify-between font-bold">
          <span>{{ job.company }}</span>
          <span>{{ job.interval.replace('now', t('present')) }}</span>
        </div>
        <span style="font-size: 0.85rem;"> {{ job.desc[locale] }} </span>
      </li>
    </ul>

    <!-- education -->
    <div class="flex flex-row mt-4">
      <Icon color="oklch(var(--a))" name="ph:books-duotone" size="1.5rem" class="my-auto mr-2"></Icon>
      <h3> {{ t('education') }}</h3>
    </div>
    <ul>
      <li>
        <div class="flex flex-row justify-between font-bold">
          <span>{{ t('degree') }}</span>
          <span style="white-space: nowrap;"> 2018 - 2023 </span>
        </div>
        <span style="font-size: 0.85rem;">Universidade Federal do Paraná </span>
      </li>
    </ul>
  </div>
</template>


<style scoped>
h3 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>


<i18n lang="json">
{
  "pt": {
    "work": "Trabalho",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação"
  },
  "en": {
    "work": "Work",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science"
  },
  "de": {
    "work": "Arbeit",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik"
  }
}
</i18n>