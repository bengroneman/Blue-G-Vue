<template>
  <div class="home">
    <!-- Main Header CTA -->
    <bhero></bhero>
    <!-- B Info/Bio Section -->
    <bintrosection></bintrosection>
    <!-- Small section // Quote blurb -->
    <div class="quote-blurb fluid__container">
      <bmarqueeslider>
        <template slot="quote">
          "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins." 
        </template>
        <template slot="attributed_to">
          - Ellen Ullman
        </template>
      </bmarqueeslider>
    </div>
    <!-- Blue G Skill Section -->
    <bskillsection></bskillsection>
    <!-- Blue G Project Section -->
    <bprojectsection></bprojectsection>
  </div>
</template>

<script>

// @ is an alias to /src
import bprojectsection from '@/components/4-Section/bProjectSection.vue'
import bhero from '@/components/1-Hero/bHero'
import bintrosection from '@/components/2-Section/bIntroSection'
import bskillsection from '@/components/3-Section/bSkillSection'
import bmarqueeslider from '@/components/0-Global/reusable/bMarqueeSlider'

export default {
  name: 'home',
  components: {
    bprojectsection,
    bhero,
    bintrosection,
    bskillsection,
    bmarqueeslider
  }
}
</script>
