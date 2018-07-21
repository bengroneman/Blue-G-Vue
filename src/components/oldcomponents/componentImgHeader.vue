<template>
    <v-layout justify-space-around>
    <v-flex xs6 sm6 md6 offset-xs1 align-center="true">
		<span class="img-header-dotted-border"></span>
        	<span class="text-md-center">Hello, My Name is Benjamin G.</span>
        	<span class="text-md-center">I develop</span>
		<span class="img-header-dotted-border"></span>
		<div id="drawing"></div>
    </v-flex>
    </v-layout>
</template>

<script>


export default {
  name: 'bgimgheader',
  components: {
  }
}
</script>

<style scoped>
span {
    display: inline;
    text-align: center;
}
.img-header-dotted-border {
	border: 2px dashed white;
	display: block;	
	
}

</style>
