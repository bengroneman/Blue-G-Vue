<template>
  <div class="home">
    <!-- Main Header CTA -->
    <bhero></bhero>
    <!-- B Info/Bio Section 
    <bintrosection></bintrosection> -->
    <!-- Small section // Quote blurb 
		<quoteblurb></quoteblurb> -->
        <!-- Blue G Skill Section 
    <bskillsection></bskillsection> -->
    <!-- Blue G Project Section
    <bprojectsection></bprojectsection> -->
  </div>
</template>

<script>

// @ is an alias to /src
import bprojectsection from '@/components/4-Section/bProjectSection.vue';
import bhero from '@/components/1-Hero/bHero';
import bintrosection from '@/components/2-Section/bIntroSection';
import bskillsection from '@/components/3-Section/bSkillSection';
import quoteblurb from '@/components/2-Section/bQuoteBlurb';

export default {
  name: 'home',
  components: {
    bprojectsection,
    bhero,
    bintrosection,
    bskillsection,
		quoteblurb,
  },
}
</script>
