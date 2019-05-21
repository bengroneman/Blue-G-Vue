<template>
  <div class="home">
    <!-- Main Header CTA -->
    <bhero>
      {{ home_page_content }}
    </bhero>
    <!-- B Info/Bio Section -->
    <bintrosection></bintrosection>
    <!-- Small section // Quote blurb -->
		<quoteblurb></quoteblurb>
        <!-- Blue G Skill Section -->
    <bskillsection></bskillsection>
    <!-- Blue G Project Section -->
    <bprojectsection></bprojectsection>
  </div>
</template>

<script>
import firebase from 'firebase';

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
  data() {
    return {
      home_page_content: null
    }
  },
  mounted: function() {
      this.home_page_content = this.getContent();
  },
  computed: {
    getContent: () => {
        const database = firebase.database();
        const content_reference = database.ref('flamelink/environments/production/content/homePageContent/en-US');
        let content = null;
        content_reference.on('value', function(data) {
            content = data.val();
        });
        return content;
      }
    },

}
</script>
