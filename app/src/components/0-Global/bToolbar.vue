<template>
<v-toolbar dark flat class="invert-colors transparent b-toolbar">
    <v-toolbar-title class="b-brand-dark">Blue G</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="b-brand-dark b-toolbar-link">Projects</v-btn>
      <v-btn flat class="b-brand-dark b-toolbar-link">Contact Me</v-btn>
      <v-btn flat class="b-brand-dark b-toolbar-link">My Other Work</v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>
<script>
	export default {
		name: 'btoolbar'
	}
</script>
<style>
.b-toolbar {
  position: fixed!important;
  top: 0;
  z-index: 100;
  font-family: 'Nunito', serif;
  font-weight: bold;
}
.b-toolbar-link {
  font-size: 1.35em;
  letter-spacing: 0.15em;
}
.toolbar__items .btn {
  margin-left: 10px!important;
  margin-bottom: 10px!important;
}

</style>
