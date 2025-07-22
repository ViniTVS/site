<script setup lang="ts">
import { themeChange } from "theme-change";
import { ref } from "vue";

const { locale, locales, setLocale } = useI18n();

let isDark = ref(true);

let pages = [
  { option: "home", path: "/" },
  { option: "about", path: "/about" },
  { option: "uni", path: "https://www.inf.ufpr.br/vtvs18/" },
];

function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
  window.dispatchEvent(
    new CustomEvent("theme-changed", {
      detail: {
        storage: localStorage.getItem("theme"),
      },
    })
  );
}

// update isDark variable and set data-theme on localstorage
watch(isDark, (val: boolean) => {
  let theme = val ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  setTheme(theme);
});

onMounted(() => {
  // set theme
  themeChange(false);
  let storageTheme = localStorage.getItem("theme");
  if (storageTheme == null) {
    storageTheme = "light";
  }
  isDark.value = storageTheme == "dark";
  document.documentElement.setAttribute("data-theme", storageTheme);
});
</script>

<template>
  <Head>
    <Meta :lang="locale" />
  </Head>
  <!-- navbar -->
  <header class="fixed w-full top-0 grid justify-items-center z-30">
    <nav
      class="flex justify-center rounded-3xl mt-4 bg-opacity-80 backdrop-blur shadow-sm shadow-base-300 bg-base-100 p-1"
    >
      <NuxtLink
        v-for="page in pages"
        class="btn btn-sm btn-ghost rounded-3xl px-4 text-md font-bold"
        :to="page.path"
      >
        {{ $t(page.option) }}
      </NuxtLink>
    </nav>
  </header>

  <!-- content -->
  <div class="custom-background" style="min-height: 100vh">
    <div
      class="h-28 grid place-content-end px-4 md:px-10 md:pt-4 z-20"
      id="option_buttons"
    >
      <div class="flex">
        <!-- theme button -->
        <button class="btn btn-ghost btn-square z-20" v-on:click="isDark = !isDark">
          <Icon
            color="oklch(var(--color-primary))"
            :name="isDark ? 'ph:sun-duotone' : 'ph:moon-duotone'"
            size="1.5rem"
          ></Icon>
        </button>
        <!-- lang button -->
        <details class="dropdown dropdown-end">
          <summary class="btn btn-ghost btn-square">
            <Icon
              color="oklch(var(--color-primary))"
              name="ph:translate-duotone"
              size="1.5rem"
            ></Icon>
          </summary>
          <ul
            class="menu dropdown-content bg-base-100 rounded-box z-[1] w-42 p-2 shadow-lg"
            id="lang_menu"
          >
            <li class="btn btn-ghost" v-for="l in locales" @click="setLocale(l.code)">
              {{ l.name }}
            </li>
          </ul>
        </details>
      </div>
    </div>
    <slot> </slot>
  </div>
</template>

<style scoped>
.copyleft {
  display: inline-block;
  transform: rotate(180deg);
}

.btn-ghost {
  border: solid;
  border-width: 3px;
  border-color: transparent;
}

.btn-ghost:hover {
  background-color: transparent;
  border-color: oklch(var(--color-primary));
}

#lang_menu {
  background-color: oklch(var(--color-base-100) 0.1);
}
</style>

<style>
html {
  font-size: 20px;
  overflow-x: hidden !important;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}
</style>
