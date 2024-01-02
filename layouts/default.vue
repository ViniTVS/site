<script setup lang="ts">
import { themeChange } from 'theme-change';
import { ref } from 'vue';
import { getData, setData } from 'nuxt-storage/local-storage';

const { locale } = useI18n();
let isDark = ref(true);
let isDropDown = ref(false);


let languages = [
    { option: 'Deutsch', value: 'de' },
    { option: 'Português', value: 'pt' },
    { option: 'English', value: 'en' },
];

watch(locale, (val: string) => {
    setData('language', val);
})

// update isDark variable and set data-theme on localstorage
watch(isDark, (val: boolean) => {
    let theme = val ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    setData('theme', theme);
});

onMounted(() => {
    // order languages options
    languages.sort(function (a, b) {
        return a.option.localeCompare(b.option);
    })

    // set theme
    themeChange(false);
    let storageTheme = getData('theme');
    if (storageTheme == null) {
        storageTheme = 'light'
    }
    isDark.value = storageTheme == 'dark';
    document.documentElement.setAttribute('data-theme', storageTheme);

    // set language
    let lang = getData('language');
    if (lang == null) {
        lang = 'en';
        let sys_lang = Intl.DateTimeFormat().resolvedOptions().locale;
        for (const language of languages) {
            if (sys_lang.includes(language.value)) {
                lang = language.value;
                break;
            }

        }
    }
    locale.value = lang;
    setData('language', lang);

});


// close dropdown on focus lost or when option is selected
// https://github.com/saadeghi/daisyui/discussions/2092
function handleDropdown(event: any, val?: string) {
    if (val != null)
        locale.value = val

    const relatedTarget = event.relatedTarget;
    const currentTarget = event.currentTarget;

    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) {
        return;
    }
    isDropDown.value = false;
}


function clickDropDown() {
    isDropDown.value = !isDropDown.value
}

</script>

<template>
    <Head>
        <Meta :lang="locale" />
    </Head>
    <nav :class="'navbar bg-base-200 backdrop-blur z-30 shadown-xl bg-opacity-' + (isDark ? '80' : '20')">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        color="oklch(var(--pc))" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-42">
                    <NuxtLink class="btn btn-ghost" to="#home">
                        <li>Homepage</li>
                    </NuxtLink>
                    <NuxtLink class="btn btn-ghost" to="#home">
                        <li>Portfolio</li>
                    </NuxtLink>
                    <NuxtLink class="btn btn-ghost" to="#home">
                        <li>About</li>
                    </NuxtLink>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <NuxtLink to="/" class="btn btn-ghost btn-circle">
                <img src="/favicon.png" style="height: 1.5rem;" />
            </NuxtLink>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle" v-on:click="isDark = !isDark">
                <Icon color="oklch(var(--s))" :name="isDark ? 'ph:sun-duotone' : 'ph:moon-duotone'" size="1.5rem"></Icon>
            </button>

            <div class="dropdown dropdown-end" @focusout="handleDropdown">
                <button class="btn btn-ghost btn-circle" style="text-" @click="clickDropDown">
                    <Icon color="oklch(var(--s))" name="ph:translate-duotone" size="1.5rem"></Icon>
                </button>
                <ul :style="{ visibility: isDropDown ? 'visible' : 'hidden' }" tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-42">
                    <button class="btn btn-ghost" v-for="lang in languages" @click="(e) => handleDropdown(e, lang.value)">
                        <li> {{ lang.option }} </li>
                    </button>
                </ul>
            </div>
        </div>
    </nav>

    {{ $t('welcome') }}
    <slot> </slot>
</template>