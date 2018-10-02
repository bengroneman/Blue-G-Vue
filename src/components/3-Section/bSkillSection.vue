<template>
<section class="container-fluid b-skill__container">
    <div class="row">
        <!-- Skill Icon Column -->
        <div class="col-8 b-skill-icon__column">
          <!-- Section Header-->
          <h1 class="text-is-center">Skill Array</h1>
          
          <!-- B First Skll -->
          <div id="is-90" class="b-skill__item"><p class="text-is-left">Javascript</p></div>

          <!-- B Second Skill -->
          <div id="is-70" class="b-skill__item"><p class="text-is-left">PHP</p></div>

          <!-- B third Skill -->
          <div id="is-75" class="b-skill__item"><p class="text-is-left">CSS</p></div>

          <!-- B Fourth Skill -->
          <div id="is-75" class="b-skill__item"><p class="text-is-left">Hubspot</p></div>

          <!-- B Fifth Skill -->
          <div id="is-70" class="b-skill__item"><p class="text-is-left">Wordpress</p></div>

          <!-- B Sixth Skill -->
          <div id="is-90" class="b-skill__item"><p class="text-is-left">Communication</p></div>

          <!-- B Seventh Skill -->
          <div id="is-65" class="b-skill__item"><p class="text-is-left">User Experience</p></div>

          <div class="b-skill__content">
            <h4>Shown above is just a glimpse of what I have to offer as a web developer</h4>
            <h4>If you are looking for a more indepth analysis, then feel free to browse my project page</h4>
            <!--<bbutton externalLink="/projects" btnText="Projects"></bbutton> -->
            <button id="b-btn" href="/projects" type="button" class="btn btn-outline-primary">Projects</button>
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
    height: 100%;
    background-color: #ccc;
}
.b-skill-icon__column {
    margin: auto;
    padding-top: 45px;
    padding-bottom: 45px;
}
.b-skill-icon__column > p {
  margin-bottom: 10px;
}
.b-skill-icon__column h1 {
  text-transform: uppercase;
  margin-bottom: 45px;
}
.b-skill__item {
  width: 100%;
  height: 30px;
  background-color: rgba(84,208,186,.8);
  border-radius: 15px;
  margin: 25px;
}
.b-skill__item > p {
  margin: 2px auto 2px 20px;
}
.b-skill__content {
  margin: 45px;
}
.b-skill__content h4:first-child {
  margin-bottom: 20px;
}

</style>
