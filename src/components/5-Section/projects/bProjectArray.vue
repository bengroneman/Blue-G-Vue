<template>
  <aside class="child project-grid">
    <!-- Project Array Header -->
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap class="full-column-height b-project-grid__wrapper">
        <!-- BProject First Row -->
        <v-flex v-for="i in 2" :key="`2${i}`" xs6>
          <v-card dark color="secondary" class="child b-project-grid__container">
            <bproject></bproject>
          </v-card>
        </v-flex>
        
        <!-- BProject Second Row -->
        <v-flex class="full-column-height" v-for="i in 2" :key="`2${i}`" xs6>
          <v-card dark color="secondary" class="child b-project-grid__container">
            <bproject></bproject>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </aside>
</template>
<script>
import bproject from '@/components/5-Section/projects/bProject'

export default {
  name: 'bprojectarray',

  components: {
    bproject
  }
}
</script>
<style>
.half-height {
  max-height: 200px;
  max-width: 150px;
}
.b-project-row {
  width: 25%;
  margin: auto;
  max-width: 500px;
  background: black;
}
.b-project-grid__wrapper {
  max-width: 500px;
  width: 500px;
  max-height: 200px;
  height: 200px;
}
.b-project-grid__container {
  height: 200px;
}
</style>
