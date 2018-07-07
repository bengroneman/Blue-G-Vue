<template>
<div class="b-skill-section">
	<h1 class="text-xs-center skill__header">Skills</h1>
	<v-container grid-list-md class="text-xs-center">
		<v-layout row wrap>
			<v-flex xs4 class="">
                <i class="material-icons">code</i>
                <h2>Technical Skills</h2>
                <p><em>Javascript, Vue, Laravel, Hubspot, Wordpress, Linux, Java, and more</em></p>
			</v-flex>
			<v-flex xs4 class="column">
                <i class="material-icons">chat</i>
                <h2>Soft Skills</h2>
                <p>Communication, content management, spreadsheets, and more</p>
			</v-flex>
			<v-flex xs4 class="column">
                <i class="material-icons">map</i>
                <h2>Interests</h2>
                <p>Hiking, biking, reading, and more</p>
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
	background: #36454f;
}
.svg__wrapper {
	height: 100%;
	width: 80%;
	border: 2px solid red;
	border-radius: 50%;
	z-index: 10;
}
.material-icons {
    font-size: 10em;
    color: #67c0ff;
}
p {
    font-size: 0.85em;
}
.b-skill-section {
    margin-top: 5em;
    margin-bottom: 5em;
}
</style>
