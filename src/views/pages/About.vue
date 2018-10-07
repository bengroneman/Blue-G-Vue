<template>
  <div class="b-about-page__wrapper">
    <h1>hello there</h1>
    <bskillchart></bskillchart>
  </div>
</template>
<script>
import bskillchart from '@/components/5-D3Charts/bSkillChart'

export default {
  name: 'about',
  components: {
    bskillchart
  }
}
</script>
<style>
.b-about-page__wrapper > h1{
  margin-top: 75px;
}
</style>
