<script setup lang="ts">
import {reactive} from "vue";
import FIndex from '@/components/FIndex.vue'
import FHome from "@/components/FHome.vue";

const list = reactive([
  {
    name:'name',
    tab:'狐斋志异',
    component: FIndex
  },
  {
    name:'name1',
    tab:'页面二',
    component: FHome
  },
])
</script>

<template>
 <div class="F-H-main">
   <n-card>
     <n-tabs type="line" animated>
       <n-tab-pane v-for="item in list" :name="item.name" :tab="item.tab">
         <Component :is="item.component"/>
       </n-tab-pane>
     </n-tabs>
   </n-card>
 </div>
</template>

<style>
.F-H-main{
  display: flex;
  justify-content: right;
}
</style>
