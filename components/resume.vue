<script setup lang="ts">

const { locale } = useI18n();
const { t } = useI18n({
  useScope: 'local'
})

interface Job {
  desc: string,
  company: string,
  interval: string,
}

const jobs: Array<Job> = [
  {
    company: "SPRO IT Solutions",
    interval: "2021 - 2023",
    desc: "intern"
  },
  {
    company: "SPRO IT Solutions",
    interval: "2023 - now",
    desc: "junior_full"
  },
];

const jobs_r = jobs.reverse();

</script>

<template>
  <div class="p-2 border-2 w-full" style="border-color: oklch(var(--p));">
    <div class="flex flex-row">
      <Icon color="oklch(var(--p))" name="ph:briefcase-duotone" size="1.5rem" class="my-auto mr-2"></Icon>
      <h3> {{ t('work') }}</h3>
    </div>
    <!-- work -->
    <ul>
      <li v-for="(job, index) in jobs_r" :key="index">
        <div>
          <span>{{ job.company }}</span>
          <span>{{ job.interval.replace('now', t('present')) }}</span>
        </div>
        <span> {{ t(job.desc) }} </span>
      </li>
    </ul>

    <!-- education -->
    <div class="flex flex-row mt-2">
      <Icon color="oklch(var(--p))" name="ph:books-duotone" size="1.5rem" class="my-auto mr-2"></Icon>
      <h3> {{ t('education') }} </h3>
    </div>
    <ul>
      <li>
        <div>
          <span>{{ t('degree') }}</span>
          <span style="white-space: nowrap;"> 2018 - 2023 </span>
        </div>
        <span>Universidade Federal do Paraná </span>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
h3 {
  font-weight: 700;
}

li {
  >div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 600;
  }

  >span {
    font-size: 0.85rem;
  }
}
</style>


<i18n lang="json">
{
  "pt": {
    "work": "Trabalho",
    "education": "Formação",
    "present": "Atualmente",
    "degree": "Bacharelado em Ciência da Computação",
    "intern": "Estágiário Desenvolvedor Fullstack",
    "junior_full": "Desenvolvedor Fullstack Júnior"
  },
  "en": {
    "work": "Work",
    "education": "Education",
    "present": "Present",
    "degree": "Bachelor's in Computer Science",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer"
  },
  "de": {
    "work": "Arbeit",
    "education": "Ausbildung",
    "present": "Gegenwart",
    "degree": "Bachelor in Informatik",
    "intern": "Fullstack Developer Intern",
    "junior_full": "Junior Fullstack Developer"
  }
}
</i18n>