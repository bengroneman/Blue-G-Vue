<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <projectruggedwerx></projectruggedwerx>
    <projectcarouselhat></projectcarouselhat>
  </v-flex>
</v-layout>
</template>

<script>
import projectruggedwerx from './projects/componentProjectRuggedWerx'
import projectcarouselhat from './projects/componentProjectCarouselHat'

export default {
  name: 'projects',  
  components: {
    projectruggedwerx,
    projectcarouselhat
  }
}
</script>

<style scoped>

</style>
