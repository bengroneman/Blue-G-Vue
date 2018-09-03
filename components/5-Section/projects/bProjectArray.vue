<template>
  <aside class="child project-grid">
    <!-- Project Array Header -->
    <h1>Project Array</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap class="b-project-grid__wrapper">
        <!-- BProject First Column -->
        <v-flex xs6>
          <div class="b-project-section__container">
            <router-link to="ruggedwerx">
              <bproject projectImgUrl="/img/ruggedwerx.png"></bproject>
            </router-link>
          </div>
        </v-flex>
        <!-- Second Column -->
        <v-flex xs6>
          <div class="b-project-section__container">
            <router-link to="bluegdev">
              <bproject projectImgUrl="/img/bluegdev.png"></bproject>
            </router-link>
          </div>
        </v-flex>
        <!--Second Row First Column -->
        <v-flex xs6>
          <div class="b-project-section__container">
            <router-link to="bonnevillebuilders">
              <bproject projectImgUrl="/img/bonnevillebuilders.png"></bproject>
            </router-link>
          </div>
        </v-flex>
       <!-- BProject Second Row -->
        <v-flex xs6>
          <div class="b-project-section__container">
            <router-link to="comingsoon">
              <bproject></bproject>
            </router-link>
          </div>
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
  max-height: 300px;
  max-width: 200px;
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
  max-height: 300px;
  height: 300px;
}
.b-project-grid__container {
  max-height: 300px;
  height: 300px;
  width: 300px;
  max-width: 300px;
}
.project-grid {
  max-height: 100%;
  margin-bottom: 100px;
  margin-top: 100px;
}
</style>
