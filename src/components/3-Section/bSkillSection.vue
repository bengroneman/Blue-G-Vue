<template>
<section class="container-fluid b-skill__container">
    <div class="row">
        <!-- Skill Icon Column -->
        <div class="col-8 b-skill-icon__column">
          <!-- Section Header-->
          <h1 class="text-is-center">Skill Icon Array</h1>
          
          <!-- B First Skll -->
          <p class="text-is-left">Javascript</p>
          <div id="is-90" class="b-skill__item"></div>

          <!-- B Second Skill -->
          <p class="text-is-left">PHP</p>
          <div id="is-70" class="b-skill__item"></div>

          <!-- B third Skill -->
          <p class="text-is-left">CSS</p>
          <div id="is-75" class="b-skill__item"></div>

          <!-- B Fourth Skill -->
          <p class="text-is-left">Hubspot</p>
          <div id="is-75" class="b-skill__item"></div>

          <!-- B Fifth Skill -->
          <p class="text-is-left">Wordpress</p>
          <div id="is-70" class="b-skill__item"></div>

          <!-- B Sixth Skill -->
          <p class="text-is-left">Communication</p>
          <div id="is-90" class="b-skill__item"></div>

          <!-- B Seventh Skill -->
          <p class="text-is-left">User Experience</p>
          <div id="is-65" class="b-skill__item"></div>

          <div class="b-skill__content">
            <p>Shown above is just a glimpse of what I have to offer as a web developer</p>
            <p>If you are looking for a more indepth analysis, then feel free to browse my project page</p>
            <bbutton externalLink="/projects" btnText="Projects"></bbutton>
          </div>
        </div>

    </div>
</section>
</template>
<script>
import bbutton from '@/components/0-Global/bButton'

export default {
	name: 'bskillsection',
  components: {
    bbutton
  }
}
</script>
<style scoped>
#is-90 {
  width: 90%;
}
#is-70 {
  width: 70%;
}
#is-75 {
  width: 75%;
}
#is-65 {
  width: 65%;
}
.b-skill__container {
    height: 100vh;
    background-color: #ccc;
}
.b-skill-icon__column {
    margin: auto;
}
.b-skill__item {
  width: 100%;
  height: 25px;
  background-color: rgba(84,208,186,.8);
  border-radius: 15px;
}
</style>
