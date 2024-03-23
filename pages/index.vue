<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="max-w-full container px-4 md:px-10">
    <div class="grid content-center" style="height: calc(100vh - 7rem); padding-bottom: 7rem;">
      <p class="text-6xl sm:text-7xl xl:text-8xl break-word font-black">
        {{ t('hello') }} &#128075; <br>
        {{ t('name') }}
      </p>
      <span class="text-lg md:text-xl font-bold">
        {{ t('text') }}
      </span>
    </div>
    <div class="divider"></div>
    <Resume />
    <Projects />
    <div class="mt-8 p-6 pt-3 grow w-full">
      <div class="flex flex-row">
        <div class="mr-4 my-2 transition "></div>
        <h2>
          <blockquote>
            Do what you think is interesting, do something that you think is fun and worthwhile,
            because otherwise you won't do it well anyway.
          </blockquote>
        </h2>
      </div>
      <span>Brian W. Kernighan</span>
    </div>
  </div>
  <!--  -->
  <footer class="max-w-full container px-4 md:px-10 footer footer-center text-base-content bg-base-300 bg-opacity-50">
    <h3 id="contact" class="pt-8 font-bold" style="font-size: 1.75rem;">{{ $t('footer.title') }}</h3>
    {{ $t('footer.text') }}
    <a href="mailto:vinisantos185@gmail.com" class="btn btn-secondary lowercase">
      vinisantos185@gmail.com
    </a>
    <div class="flex flex-col" style="font-size: 0.75rem">
      <div class="flex flex-row">
        <span class="copyleft">&copy;</span> 2024 - Projetado e
        desenvolvido com
        <img alt="amor" src="/full_heart.png" id="coracao" class="mx-1" style="height: 1rem" />
      </div>
      Vinícius Teixeira Vieira dos Santos
    </div>
  </footer>
</template>

<i18n lang="json">{
  "pt": {
    "hello": "Olá.",
    "name": "Eu sou Vinícius.",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum."
  },
  "en": {
    "hello": "Hello.",
    "name": "I'm Vinícius.",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum."
  },
  "de": {
    "hello": "Hallo.",
    "name": "Ich bin Vinícius.",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum."
  }
}</i18n>

<style>
#about {
  padding-top: 90px;
  padding-bottom: auto;
  max-height: 800px;
}

#eu {
  height: auto;
  max-width: 200px;
  border-radius: 8px;
  margin: auto;
}

.transition {
  background: linear-gradient(180deg,
      transparent -50%,
      oklch(var(--a)) 20%,
      oklch(var(--a)) 80%,
      transparent 150%);
  height: inherit;
  min-width: 4px;
  width: 4px;
}

@media (min-width: 768px) {
  #about {
    margin: auto;
    height: auto;
  }
}
</style>
