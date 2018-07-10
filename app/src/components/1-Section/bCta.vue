<template>
 <v-jumbotron :gradient="gradient" src="img/BenG-Portfolio.JPG" dark>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <div class="cta-header__wrapper">
              <!-- <bfeatureimg class="feature__image"></bfeatureimg> -->
            <h3 class="display-3 b-cta__header">Ben Groneman | <span>Avid Developer</span></h3>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
<script>
import bfeatureimg from '@/components/0-Global/bFeatureImg'

export default {
    name: 'b-cta',
data: () => ({
  gradient: 'to top right, rgba(0, 0, 0, .7), rgba(128,128,128, .7)'
}),

components: {
    bfeatureimg
}
}
</script>
<style>
.b-cta__header {
  position: absolute;
  bottom: 0;
  left: 240px;
  margin-left: 35px;
}
.b-cta__header > h3 {
  font-weight: 900;
}
.b-cta__header > span {
  font-size: 0.65em;
  font-weight: 100;
}
.cta-header__wrapper {
    width: 100%;
    height: 200px;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
}
.feature__image {
    height: 175px;
    width: 175px;
}
</style>
