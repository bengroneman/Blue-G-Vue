<template>
  <div class="home">
    <!-- Main Header CTA -->
    <bhero></bhero>
    <!-- B Info/Bio Section -->
    <bintrosection></bintrosection>
    <!-- Small section // Quote blurb -->
    <div class="quote-blurb fluid__container">
        <h2 class="text-xs-center"><em>" No valid plans for the future can be made by those who have no capacity for living now. "
        </em></h2><p class="text-xs-center">-- Alan Watts</p>
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

export default {
  name: 'home',
  components: {
    bprojectsection,
    bhero,
    bintrosection,
    bskillsection
  }
}
</script>
