<template>
<v-toolbar dark class="b-toolbar">
    <v-toolbar-title>Blue G</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat color="teal">Projects</v-btn>
      <v-btn flat color="teal">Contact Me</v-btn>
      <v-btn flat color="teal">My Other Work</v-btn>
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
  background-color: white!important;
  opacity: 0.75;
  position: fixed!important;
  top: 0;
  z-index: 100;
}
.toolbar__items .btn {
  margin-left: 10px!important;
  margin-bottom: 10px!important;
}
</style>
