<template>
<v-toolbar class="invert-colors b-toolbar">
    <v-toolbar-title class="is-size-3 b-brand-green">Blue G</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat ripple href="#about" class="is-size-4 b-brand-green b-toolbar-link">About</v-btn>
      <v-btn flat ripple href="#skills" class="is-size-4 b-brand-green b-toolbar-link">Skills</v-btn>
      <v-btn flat ripple href="#projects" class="is-size-4 b-brand-green b-toolbar-link">Projects</v-btn>
      <v-btn flat ripple href="#footer" class="is-size-4 b-brand-green b-toolbar-link">Contact</v-btn>
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
  background-color: rgba(1, 6, 15, 0.75);
}
.b-toolbar-link {
  font-size: 1.35em;
  letter-spacing: 0.15em;
}
.toolbar__items .btn {
  margin-left: 10px!important;
  margin-bottom: 10px!important;
}
.b-brand-green {
 color: #54d0ba!important;
 font-weight: 900;
 font-family: 'Nunito-Bold', sans-serif;
}
</style>
