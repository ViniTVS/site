<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('content').all())
const { data: home } = await useAsyncData(() => queryCollection('content').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
// useSeoMeta({
//   title: data?home.value?.title,
//   description: home.value?.description
// })
</script>pos

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>