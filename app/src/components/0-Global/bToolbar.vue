<template>
<v-toolbar flat class="invert-colors transparent b-toolbar">
    <v-toolbar-title class="is-size-3 b-green-ish">Blue G</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat ripple href="#about" class="is-size-4 b-green-ish b-toolbar-link">About</v-btn>
      <v-btn flat ripple href="#skills" class="is-size-4 b-green-ish b-toolbar-link">Skills</v-btn>
      <v-btn flat ripple href="#projects" class="is-size-4 b-green-ish b-toolbar-link">Projects</v-btn>
      <v-btn flat ripple href="#footer" class="is-size-4 b-green-ish b-toolbar-link">Contact</v-btn>
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
