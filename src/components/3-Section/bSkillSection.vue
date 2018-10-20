<template>
<section class="container-fluid b-skill__container">
  <!-- Section Header-->
  <h1 class="text-is-center">Skill Array</h1>

  <div class="row">
    <!-- Skill Icon Column -->
    <div class="col-8 b-skill-icon__column">
      
      <!-- START B Skll -->
      <bskillcardsmall tagLine="sometagline" skillName="Javascript"></bskillcardsmall>

      <bskillcardsmall tagLine="sometagline" skillName="Hubspot"></bskillcardsmall>

      <bskillcardsmall tagLine="sometagline" skillName="Linux"></bskillcardsmall>

      <bskillcardsmall tagLine="sometagline" skillName="HTML / CSS"></bskillcardsmall>
      <!-- END B Skills -->
      <!-- END B Skills -->
    </div>

    <div class="b-skill__content">
      <div>
        <h2>Shown above is just a glimpse of what I have to offer as a web developer</h2>
        <h5>If you are looking for a more indepth analysis, then feel free to browse my project page</h5>
        <!--<bbutton externalLink="/projects" btnText="Projects"></bbutton> -->
        <button id="b-btn" href="/projects" type="button" class="btn btn-outline-primary">Projects</button>
      </div>
    </div>
  </div>
</section>

</template>
<script>
import bbutton from '@/components/0-Global/bButton'
import bskillcardsmall from '@/components/3-Section/bSkillCardSmall'

export default {
	name: 'bskillsection',
  components: {
    bbutton,
    bskillcardsmall
  }
}
</script>
<style>
.b-skill__container {
    height: 100%;
    background-color: #ccc;
}
.b-skill__container > h1 {
  padding: 45px;
}
.b-skill-icon__column {
    margin: auto;
    padding-top: 45px;
    padding-bottom: 45px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.b-skill-icon__column .b-skill__item:nth-child(even) {
  background: black;
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
}
.b-skill__item > p {
  margin: 2px auto 2px 20px;
}
.b-skill__content {
  margin: 45px;
  width: 100%;
  display: flex;
}
.b-skill__content > div {
  margin: auto;
  max-width: 768px;
}
.hover-text {
  display: none;
}
.b-skill__item:hover .hover-text {
  display: inline; 
}

.b-skill__content h5 {
  margin: 45px auto;
}

</style>
