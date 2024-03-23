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
  <header class="fixed w-full top-0 grid justify-items-center z-30">
    <nav class="flex justify-center rounded-3xl mt-4 bg-opacity-80 backdrop-blur shadow-sm bg-base-100 p-1">
      <NuxtLink v-for="page in pages" class="btn btn-sm btn-ghost rounded-3xl px-4 text-md font-bold" :to="page.path">
        {{ $t(page.option) }}
      </NuxtLink>

    </nav>

  </header>

  <!-- content -->
  <div class="custom-background">
    <div class="h-28 grid place-content-end px-4 md:px-10 md:pt-4 z-20" id="option_buttons">
      <div class="flex">
        <!-- theme button -->
        <button class="btn btn-ghost btn-square z-20" v-on:click="isDark = !isDark">
          <Icon color="oklch(var(--p))" :name="isDark ? 'ph:sun-duotone' : 'ph:moon-duotone'" size="1.5rem"></Icon>
        </button>
        <!-- lang button -->
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
    </div>
    <slot> </slot>
  </div>
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
