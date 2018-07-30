<template>
  <aside class="child project-grid">
    <!-- Project Array Header -->
    <h1>Project Array</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap class="b-project-grid__wrapper">
        <!-- BProject First Column -->
        <v-flex xs6>
          <v-card dark color="secondary" class="child b-project-grid__container">   
            <router-link to="ruggedwerx">
              <bproject projectImgUrl="/img/ruggedwerx.png"></bproject>
            </router-link>
          </v-card>
        </v-flex>
        <!-- Second Column -->
        <v-flex xs6>
          <v-card dark color="secondary" class="child b-project-grid__container">
            <router-link to="bluegdev">
              <bproject projectImgUrl=""></bproject>
            </router-link>
          </v-card>
        </v-flex>
        <!--Second Row First Column -->
        <v-flex xs6>
          <v-card dark color="secondary" class="child b-project-grid__container">   
            <router-link to="bonnevillebuilders">
              <bproject></bproject>
            </router-link>
          </v-card>
        </v-flex>
       <!-- BProject Second Row -->
        <v-flex xs6>
          <v-card dark color="secondary" class="child b-project-grid__container">
            <router-link to="comingsoon">
              <bproject></bproject>
            </router-link>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </aside>
</template>
<script>
import bproject from '@/components/5-Section/projects/bProject'
import bprojecttabwrapper from '@/components/5-Section/projectTabWrapper' 

export default {
  name: 'bprojectarray',

  components: {
    bproject,
    bprojecttabwrapper
  },

  data: () => ({
    projectImgList: [] 
  }),
  
  methods: {
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
  max-height: 200px;
}
.project-grid {
  max-height: 100%;
  margin-bottom: 100px;
  margin-top: 100px;
}
</style>
