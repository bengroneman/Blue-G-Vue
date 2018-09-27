<template>
  <div class="home">
    <!-- Main Header CTA -->
    <bcta></bcta>
    <!-- B Info/Bio Section -->
    <binfosection></binfosection>
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
import bcta from '@/components/1-Section/bCta'
import binfosection from '@/components/2-Section/bInfoSection'
import bskillsection from '@/components/3-Section/bSkillSection'

export default {
  name: 'home',
  components: {
    bprojectsection,
    bcta,
    binfosection,
    bskillsection
  }
}
</script>
