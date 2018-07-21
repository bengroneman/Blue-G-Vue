<template>
<div id="skills" class="b-skill-section">
	<h1 class="text-xs-center skill__header">What I Bring to the Table</h1>
	<v-container grid-list-md class="text-xs-center">
		<v-layout row wrap class="skills-section__wrapper">
			<v-flex xs4 class="column">
        <i class="material-icons">code</i>
        <h2 class="title is-size-1">Technical Skills</h2>
        <div class="skill-icon-list__wrapper">
          <div class="vuejs__wrapper skill-icon__wrapper">
            <p class="is-size-4">VueJs</p>
          </div>
          <div class="js__wrapper skill-icon__wrapper">
            <p class="is-size-4">Javascript</p>
          </div>
          <div class="laravel__wrapper skill-icon__wrapper">
            <p class="is-size-4">Laravel</p>
          </div>
          <div class="java__wrapper skill-icon__wrapper">
            <p class="is-size-4">Java</p>
          </div>
          <div class="php__wrapper skill-icon__wrapper">
            <p class="is-size-4">PHP</p>
          </div>
      </div>
			</v-flex>
			<v-flex xs4 class="column">
        <i class="material-icons">chat</i>
        <h2 class="title is-size-1">Soft Skills</h2>
      <div class="skill-icon-list__wrapper">
          <div class="communication__wrapper skill-icon__wrapper">
            <!--<i class="fas fa-universal-access is-size-4"></i> -->
            <p class="is-size-4">Communication</p>
            </div>
            <div class="project-management__wrapper skill-icon__wrapper">
              <!-- <i class="fas fa-project-diagram is-size-4"></i> -->
              <p class="is-size-4">Projects</p>
            </div>
            <div class="content-management__wrapper skill-icon__wrapper">
              <!-- <i class="fas fa-book is-size-4"></i> -->
              <p class="is-size-4">Content</p>
            </div>
        </div>

      </v-flex>
			<v-flex xs4 class="column">
        <i class="material-icons">map</i>
        <h2 class="title is-size-1">Interests</h2>
        <p class="is-size-5">Hiking, biking, reading, and more</p>
			</v-flex>
		</v-layout>
	</v-container>
  <!-- Programming icons -->
  <div class="skill-icon-list__wrapper">
    <div class="vuejs__wrapper skill-icon__wrapper">
      <i class="fab fa-vuejs is-size-4"></i>
    </div>
    <div class="js__wrapper skill-icon__wrapper">
      <i class="fab fa-js is-size-4"></i>
    </div>
    <div class="laravel__wrapper skill-icon__wrapper">
      <i class="fab fa-laravel is-size-4"></i>
    </div>
    <div class="java__wrapper skill-icon__wrapper">
      <i class="fab fa-java is-size-4"></i>
    </div>
    <div class="php__wrapper skill-icon__wrapper">
      <i class="fab fa-php is-size-4"></i>
    </div>
  </div>
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
.skill-icon-list__wrapper {
  display: inline-flex;
}
.skills-section__wrapper {
  margin-bottom: 65px;
}
.skill-icon__wrapper > p {
  margin: 5px;
}
.skill-icon__wrapper > i {
  margin: 5px;
}
.fab {
  color: #54d0ba;
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
