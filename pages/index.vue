<script setup lang="ts">

const { t } = useI18n({
  useScope: 'local'
})


</script>

<template>
  <div id="about">
    <div class="hero-content flex-col md:flex-row-reverse px-0 mx-0">
      <img alt="Headshot" src="/eu.png" id="eu" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h2 class="font-bold" style="font-size: 1.875rem;">{{ t('title') }}</h2>
        <p>
          {{ t('text') }}
        </p>
        <NuxtLink to="/about" class="btn btn-primary md:btn-sm mt-2">
          {{ $t('more') }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="grid grid-cols-2 md:grid-cols-5 md:gap-4">
    <div class="col-span-3">
      <Projects />
    </div>
    <div class="col-span-2">
      <Resume />
    </div>
  </div>
</template>


<i18n lang="json">
{
  "pt": {
    "title": "Sobre mim",
    "text": "Eu sou Vinícius, um estudante de Ciência da Computação e desenvolvedor trabalhando com PHP, MySQL e Flutter. Durante a graduação tive a oportunidade de aprender programação desde C e C++ a Java e Python. Fazendo minha Iniciação Científica em robótica também passei a conhecer melhor sobre dispositivos IoT e Arduino."
  },
  "en": {
    "title": "About me",
    "text": "I'm Vinícius, a Computer Science student and developer working with PHP, MySQL and Flutter. During graduation I had the opportunity to learn programming from C and C++ to Java and Python. Doing my Scientific Initiation in robotics, I also got to know better about IoT devices and Arduino."
  },
  "de": {
    "title": "Über mich",
    "text": "Ich bin Vinícius, ein Informatikstudent und Entwickler, der mit PHP, MySQL und Flutter arbeitet. Während meines Abschlusses hatte ich die Gelegenheit, Programmieren von C und C++ bis hin zu Java und Python zu lernen. Während meiner wissenschaftlichen Einführung in Robotik lernte ich auch IoT-Geräte und Arduino besser kennen."
  }
}
</i18n>

<style>
#about {
  padding-top: 90px;
  padding-bottom: auto;
  max-height: 800px;
}

#eu {
  /* width: 100%; */
  height: auto;
  max-width: 200px;
  border-radius: 8px;
  margin: auto;
}

@media (min-width: 768px) {
  #about {
    margin: auto;
    height: auto;
  }
}
</style>