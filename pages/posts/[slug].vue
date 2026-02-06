<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  const p = route.path.split("/")
  return queryCollection('content').path("/" + p.slice(-2).join("/")).first()
})

</script>
<template>
  <div class="post-content">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>