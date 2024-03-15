<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- 调整 naive-ui 的字重配置 -->
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <RouterView />
  </n-config-provider>

</template>

<style scoped>

</style>
