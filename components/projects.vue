<script setup lang="ts">

interface Project {
    lang: { [id: string]: { title: string, desc: string } },
    link: string,
    tech: Array<string>,
    api: string,
}
const { locale } = useI18n();


const projects: Ref<Array<Project>> = ref([
    {
        link: "https://github.com/ViniTVS/codewars",
        tech: [],
        api: "https://api.github.com/repos/ViniTVS/codewars/languages",
        lang: {
            pt: {
                title: "Codewars",
                desc: "Codewars é um site para treinar e desenvolver habilidades de lógica e linguagens de programação com desafios de prática de código.  Aqui você encontra um repositório com minhas soluções."
            },
            de: {
                title: "Codewars",
                desc: "<a href=\"https://www.codewars.com/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\"> Codewars</a> ist eine Website zum Trainieren und Entwickeln von Logik- und Programmiersprachen Kenntnisse mit Code-Übungsherausforderungen. <br> Hier finden Sie ein Repository mit meinen Lösungen."
            },
            en: {
                title: "Codewars",
                desc: "<a href=\"https://www.codewars.com/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\"> Codewars</a> is a website to train and develop logic and programming language skills with code practice challenges. <br> Here you will find a repository with my solutions."
            }
        }
    },
    {
        link: "https://github.com/ViniTVS/site",
        tech: [
            "TypeScript",
            "Svelte",
            "Tailwind",
            "Devicon"
        ],
        api: "",
        lang: {
            pt: {
                title: "Site",
                desc: "Desenvolvido em sua maioria com HTML e CSS, foi utilizado um pouco de TypeScript para tornar o site dinâmico e modular. <br> Feito com <a href=\"https://kit.svelte.dev/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\">SvelteKit</a> e componentes do <a href=\"https://daisyui.com/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\">daisyUI</a>."
            },
            de: {
                title: "Site",
                desc: "Hauptsächlich mit HTML und CSS entwickelt, wurde ein wenig TypeScript verwendet, um die Site dynamisch und modular zu gestalten. <br> Hergestellt mit <a href=\"https://kit.svelte.dev/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\">SvelteKit</a> und <a href=\"https://daisyui.com/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\">daisyUI</a>-Komponenten."
            },
            en: {
                title: "Site",
                desc: "Developed mostly with HTML and CSS, a bit of TypeScript was used to make the site dynamic and modular. <br> Made with <a href=\"https://kit.svelte.dev/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\">SvelteKit</a> and <a href=\"https://daisyui.com/\" target=\"_blank\" rel=\"noreferrer\" class=\"link\">daisyUI</a> components."
            }
        }
    },
    {
        "link": "https://github.com/stars/ViniTVS/lists/ci%C3%AAncia-da-computa%C3%A7%C3%A3o",
        tech: [
            "C",
            "Python",
            "C++",
            "Java",
            "Haskell"
        ],
        api: "",
        lang: {
            pt: {
                title: "Trabalhos",
                desc: "Uma lista de repositórios contendo trabalhos de diferentes matérias realizados durante meu bacharelado. <br> <span style=\"font-size: 0.8rem;\">(podem ou não estar com seus enunciados)</span>"
            },
            en: {
                title: "University",
                desc: "A list of repositories containing works in different subjects carried out during my bachelor's degree. <br> <span style=\"font-size: 0.8rem;\">(may or may not have their original statements)</span>"
            },
            de: {
                title: "Universität",
                desc: "Eine Liste von Repositorien mit Arbeiten zu verschiedenen Themen, die während meines Bachelorstudiums entstanden sind. <br> <span style=\"font-size: 0.8rem;\">(kann mit Ihren Aussagen übereinstimmen oder auch nicht)</span>"
            }
        }
    },
]);

onMounted(() => {

    for (let i in projects.value) {
        if (projects.value[i].api != '') {
            fetch(projects.value[i].api, {
                headers: {
                    Accept: 'application/json'
                }
            }).then((response) => response.json()).then((json) => {
                // ordena linguagens mais usadas... https://stackoverflow.com/a/16794116
                let ling = Object.keys(json).sort(function (a, b) {
                    return json[b] - json[a];
                });
                projects.value[i].tech = ling.slice(0, 5); // limita em 5
            });
        }

    }

})
</script>

<template>
    <div class="flex flex-row justify-between flex-wrap">
        <a v-for="(project, index) in projects" :href=project.link target="_blank" rel="noreferrer"
            class="project-showcase mt-8 p-6" :class="'bg-' + (index % 5).toString()">
            <!-- texto -->
            <div>
                <h3>{{ project.lang[locale].title }}</h3>
                <div v-html="project.lang[locale].desc"></div>
            </div>
            <!-- ícones -->
            <div class="flex mt-4">
                <div class="flex flex-row justify-start">
                </div>
            </div>
        </a>

        <div class="project-showcase mt-8 p-6 pt-3 grow">
            <div class="flex flex-row">
                <div class="mr-4 my-2 transition transition-2"></div>
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
</template>
