<script setup lang="ts">


const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  const route_array = route.path.split('/').slice(-2);
  return queryCollection('content').path('/' + route_array.join('/')).first()
})
</script>

<template>
  page: {{ page }}
  <div class="post-content" :id="page?.id">
    <ContentRenderer v-if="page" :value="page"/>
  </div>
</template>