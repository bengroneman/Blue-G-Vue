<template>
  <div class="columns full-view-height is-three-fifths is-offset-one-fifth">
    <!-- Grid array of all projects -->
    <div class="column full-column-height parent">
      <bprojectarray></bprojectarray>   
    </div>
    <!-- Project details // in depth answer -->
    <div class="column full-column-height">
    
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
