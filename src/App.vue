<template>
  <div id="app">
    <!-- B Global Toolbar -->
    <btoolbar></btoolbar>
    <!-- Main Header CTA -->
    <bcta></bcta>
    <!-- B Info/Bio Section -->
    <binfosection></binfosection>    
    <!-- Small section // Quote blurb -->
    <v-container fluid class="quote-blurb fluid__container">
        <h2 class="text-xs-center"><em>No valid plans for the future can be made by those who have no capacity for living now.
        </em></h2><p class="text-xs-center">-- Alan Watts</p> 
    </v-container>
    <!-- Blue G Skill Section -->
    <div class="fluid__container full-height skills-section columns">
      <div class="column child is-three-fifths">
        <bskillsection></bskillsection>
      </div>
    </div>
    <!-- Blue G Project Section -->
    <bprojectsection></bprojectsection>
    <!-- Project Grid and Description -->
    <bprojectrow></bprojectrow>
    <!-- Blue G Footer-->
    <bfooter></bfooter>
  </div>
</template>
<script>
import btoolbar from '@/components/0-Global/bToolbar'
import bcta from '@/components/1-Section/bCta'
import binfosection from '@/components/2-Section/bInfoSection'
import bskillsection from '@/components/3-Section/bSkillSection'
import bfooter from '@/components/Footer/bFooter.vue'
import bprojectsection from '@/components/4-Section/bProjectSection'
import bprojectrow from '@/components/5-Section/bProjectRow'

export default {
    components: {
        btoolbar,
        bcta,
        binfosection,
        bskillsection,
        bfooter,
        bprojectsection,
        bprojectrow
    }
}
</script>

