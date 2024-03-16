<script setup lang="ts">
import {RouterView} from 'vue-router'
import {darkTheme} from 'naive-ui'

</script>

<template>
  <!-- 调整 naive-ui 的字重配置 -->
    <n-config-provider :theme="darkTheme" :theme-overrides="{ common: { fontWeightStrong: '600' } }">
      <RouterView />
    </n-config-provider>
</template>

<style scoped>

</style>
