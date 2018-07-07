<template>
 <v-jumbotron
    :gradient="gradient"
    src="@/assets/images/BenG-Portfolio.JPG"
    dark
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3 b-cta__header">Ben Groneman | <span>Avid Developer</span></h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
<script>
	export default {
		name: 'b-cta',
    data: () => ({
      gradient: 'to top right, rgba(0, 0, 0, .7), rgba(128,128,128, .7)'
    })
	}
</script>
<style>
.b-cta__header {
  position: absolute;
  bottom: 0;
  left: 240px;
}
.b-cta__header > h3 {
  font-weight: 900;
}
.b-cta__header > span {
  font-size: 0.65em;
  font-weight: 100;
}
</style>
