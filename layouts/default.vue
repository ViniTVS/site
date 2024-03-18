<script setup lang="ts">
import { themeChange } from "theme-change";
import { ref } from "vue";

const { locale } = useI18n();

let isDark = ref(true);
let isDropDown = ref(false);

let languages = [
  { option: "Deutsch", value: "de" },
  { option: "Português", value: "pt" },
  { option: "English", value: "en" },
];

let pages = [
  { option: "home", path: "/" },
  { option: "about", path: "/about" },
  { option: "uni", path: "/uni" },
];

watch(locale, (val: string) => {
  localStorage.setItem("language", val);
});

function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new CustomEvent('theme-changed', {
    detail: {
      storage: localStorage.getItem('theme')
    }
  }));
}

// update isDark variable and set data-theme on localstorage
watch(isDark, (val: boolean) => {
  let theme = val ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  setTheme(theme);
});

onMounted(() => {
  // order languages options
  languages.sort(function (a, b) {
    return a.option.localeCompare(b.option);
  });

  // set theme
  themeChange(false);
  let storageTheme = localStorage.getItem("theme");
  if (storageTheme == null) {
    storageTheme = "light";
  }
  isDark.value = storageTheme == "dark";
  document.documentElement.setAttribute("data-theme", storageTheme);

  // set language
  let lang = localStorage.getItem("language");
  if (lang == null) {
    lang = "en";
    let sys_lang = Intl.DateTimeFormat().resolvedOptions().locale;
    for (const language of languages) {
      if (sys_lang.includes(language.value)) {
        lang = language.value;
        break;
      }
    }
  }
  locale.value = lang;
  localStorage.setItem("language", lang);
});

// close dropdown on focus lost or when option is selected
// https://github.com/saadeghi/daisyui/discussions/2092
function handleDropdown(event: any, val?: string) {
  if (val != null) locale.value = val;

  const relatedTarget = event.relatedTarget;
  const currentTarget = event.currentTarget;

  if (
    relatedTarget instanceof HTMLElement &&
    currentTarget.contains(relatedTarget)
  ) {
    return;
  }
  isDropDown.value = false;
}

function clickDropDown() {
  isDropDown.value = !isDropDown.value;
}
</script>

<template>

  <Head>
    <Meta :lang="locale" />
  </Head>
  <!-- navbar -->
  <nav class="sticky top-0 z-30 flex h-16 w-full bg-opacity-80 backdrop-blur shadow-sm navbar md:px-6 bg-base-100">
    <!-- left -->
    <div class="navbar-start">
      <!-- dropdown for mobile -->
      <div class="dropdown md:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost btn-square">
          <Icon name="ph:list-bold" size="1.5rem" />
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-42">
          <NuxtLink v-for="page in pages" class="btn btn-ghost" :to="page.path">
            <li>{{ $t(page.option) }}</li>
          </NuxtLink>
        </ul>
      </div>
      <!-- desktop options -->
      <div class="hidden md:flex flex-row">
        <NuxtLink v-for="page in pages" class="btn btn-ghost" :to="page.path">
          {{ $t(page.option) }}
        </NuxtLink>
      </div>
    </div>
    <!-- center -->
    <NuxtLink to="/" class="navbar-center btn btn-ghost btn-circle">
      <img src="/favicon.png" style="height: 1.5rem;" />
    </NuxtLink>
    <!-- right -->
    <div class="navbar-end">
      <button class="btn btn-ghost btn-square" v-on:click="isDark = !isDark">
        <Icon color="oklch(var(--p))" :name="isDark ? 'ph:sun-duotone' : 'ph:moon-duotone'" size="1.5rem"></Icon>
      </button>

      <div class="dropdown dropdown-end" @focusout="handleDropdown">
        <button class="btn btn-ghost btn-square" style="text-" @click="clickDropDown">
          <Icon color="oklch(var(--p))" name="ph:translate-duotone" size="1.5rem"></Icon>
        </button>
        <ul :style="{ visibility: isDropDown ? 'visible' : 'hidden' }" tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-42">
          <button class="btn btn-ghost" v-for="lang in languages" @click="(e) => handleDropdown(e, lang.value)">
            <li>{{ lang.option }}</li>
          </button>
        </ul>
      </div>
    </div>
  </nav>
  <!-- content -->
  <div class="max-w-full container px-4 md:px-10 custom-background">
    <slot> </slot>
  </div>
  <!--  -->
  <footer class="max-w-full container px-4 md:px-10 footer footer-center text-base-content bg-base-300 bg-opacity-50">
    <h3 id="contact" class="pt-8 font-bold" style="font-size: 1.75rem;">{{ $t('footer.title') }}</h3>
    {{ $t('footer.text') }}
    <a href="mailto:vinisantos185@gmail.com" class="btn btn-secondary" style="text-transform: lowercase">
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

<style lang="scss" scoped>
.copyleft {
  display: inline-block;
  transform: rotate(180deg);
}

.btn-ghost {
  border: solid;
  border-width: 3px;
  border-color: transparent;

  &:hover {
    background-color: transparent;
    border-color: oklch(var(--p));
  }
}
</style>

<style lang="scss">
html {
  font-size: 20px;
  overflow-x: hidden !important;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}
</style>
