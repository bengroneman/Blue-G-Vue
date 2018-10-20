<template>
<!-- B First Skll -->
  <div id="skill-card" class="b-skill__item">

    <span class="skill-name">{{skillName}}</span>

    <div class="hover_text">
      <p>{{ tagLine }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bskillcardsmall',

  props: {
    tagLine: String,
    skillName: String
  }
}
</script>
<style>
#skill-card {
  height: 125px;
  max-width: 125px;
  margin: auto;
  padding: 45px;
  box-shadow: 2px 2px 2px 2px #ccc;
  background-color: white;
}
.skill-name {
  border-radius: 10px;
  background: green;
  padding: 5px;
  width: 100%;
}
</style>
