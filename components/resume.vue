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
    desc: "SPRO IT Solutions",
    title: "junior_full",
    start: new Date("2023-03-14"),
    end: today,
    color: 'bg-secondary text-primary-secondary'
  },
  {
    desc: "SPRO IT Solutions",
    title: "intern",
    start: new Date("2021-03-14"),
    end: new Date("2023-03-14"),
    color: 'bg-secondary text-primary-secondary'
  },
  // {
  //   desc: "UFPR",
  //   title: "degree",
  //   start: new Date("2018-02-12"),
  //   end: new Date("2023-11-20"),
  //   color: 'bg-accent text-primary-content'
  // },
]);


const min_year: number = Math.min(...exps.value.map((xp) => getYearFloat(xp.start)));
const max_year: number = Math.max(...exps.value.map((xp) => getYearFloat(xp.end)));

function getPerc(value: number, min: number = min_year, max: number = max_year): number {
  let interval = max - min;
  let diff = value - min;
  return (diff / interval) * 100;
}

</script>

<template>
  <h3>{{t('work')}}</h3>
  <div class="flex flex-col w-full">
    <div v-for="(xp, i) in exps" :key="'xp-' + i"
      class="text-center grow h-20 my-2 rounded-full flex flex-row p-3 px-4 text-lg"
      :style="'margin-left: ' + getPerc(getYearFloat(xp.start)) + '%; margin-right: ' + (100 - getPerc(getYearFloat(xp.end))) + '%'"
      :class="xp.color">
      <div class="grow flex flex-col h-full text-left">
        <span class="my-auto h-1/2 align-top text-left font-bold">{{ t(xp.title) }}</span>
        <span class="my-auto h-1/2 align-bottom grow text-sm">{{ xp.desc }}</span>
      </div>
      <span class="my-auto align-middle font-bold text-right text-clip">
        {{ format(xp.start, "yy") }}~{{ xp.end == today ? '' : format(xp.end, "yy") }}
      </span>


    </div>
  </div>
  <div class="mockup-browser border bg-base-300">
    <div class="mockup-browser-toolbar">
      <div class="input">https://daisyui.com</div>
    </div>
    <div class="bg-base-200">
      
      <img alt="Headshot" src="/viso-dark.png" id="viso" class="w-full" />  
    </div>
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