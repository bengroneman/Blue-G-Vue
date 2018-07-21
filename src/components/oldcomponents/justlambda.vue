<template>
<div class="console-lambda">
	&lambda; ~/Code <span class="console-master">master <v-icon>fa fa-code-branch</v-icon></span>
</div>
</template>

<script>
export default {
	name: 'justlambda',
}
</script>

<style>
.console-lambda {
	z-index: 110;
	background: blue;
	display: inline;
	padding: 2px;
	margin: 10px;
}
.console-master {
	background: green;
}
</style>

