<template>
<div id="skills" class="b-skill-section">
	<h1 class="text-xs-center skill__header">Skills</h1>
	<v-container grid-list-md class="text-xs-center">
		<v-layout row wrap class="skills-section__wrapper">
			<v-flex xs4 class="column">
        <i class="material-icons">code</i>
        <h2 class="title is-size-1">Technical Skills</h2>
        <p class="is-size-5"><em>Javascript, Vue, Laravel, Hubspot, Wordpress, Linux, Java, and more</em></p>
			</v-flex>
			<v-flex xs4 class="column">
        <i class="material-icons">chat</i>
        <h2 class="title is-size-1">Soft Skills</h2>
        <p class="is-size-5">Communication, content management, spreadsheets, and more</p>
			</v-flex>
			<v-flex xs4 class="column">
        <i class="material-icons">map</i>
        <h2 class="title is-size-1">Interests</h2>
        <p class="is-size-5">Hiking, biking, reading, and more</p>
			</v-flex>
		</v-layout>
	</v-container>
</div>
</template>
<script>
export default {
	name: 'bskillsection'
}
</script>
<style scoped>
.container {
	background: #202f3e;
}
.title {
  text-transform: uppercase;
  color: white;
}
.svg__wrapper {
	height: 100%;
	width: 80%;
	border: 2px solid red;
	border-radius: 50%;
	z-index: 10;
}
.skills-section__wrapper {
  margin-bottom: 65px;
}
.material-icons {
    font-size: 10em;
    color: #54d0ba;
}
p {
    font-size: 0.85em;
}
.b-skill-section {
    margin-bottom: 5em;
}
.skill__header {
    padding-top: 2em;
}
</style>
