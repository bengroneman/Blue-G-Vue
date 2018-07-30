<template>
  <div class="columns project-section-col__wrapper">
    <!-- Grid array of all projects -->
    <div class="column parent project-section-col">
      <bprojectarray></bprojectarray>   
    </div>
    <!-- Project details // in depth answer -->
    <div class="column parent project-section-col-2">
      <router-view></router-view> 
    </div>
  </div>

</template>
<script>
import bprojectarray from '@/components/5-Section/projects/bProjectArray.vue'

export default {
  name: 'bprojectrow',
  
  components: {
    bprojectarray
  }  
}
</script>
<style>
.project-section-col__wrapper {
  height: 100%;
}
.project-section-col {
  margin-bottom: 100px;
}
.project-section-col-2 {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>

