<template>
  <div class="home">
    <!-- Main Header CTA -->
    <bhero>
      <h1>{{ home_page_content.mainHeader }}</h1>
      <h2>{{ home_page_content.secondaryHeader }}</h2>
    </bhero>
    <!-- B Info/Bio Section -->
    <bintrosection> 
      <template name="header">
        <h1 class="has-text-left">
          {{ this.home_page_content.introHeader }}
        </h1>
      </template>
      <div v-html="this.home_page_content.introContentBlurb" class="has-text-left">
      </div>
    </bintrosection>
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
            home_page_content: {},
            errored: false,
            loading: true
        }
    },
    mounted: function() {
        const database = firebase.database();
        const content_reference = database.ref('flamelink/environments/production/content/homePageContent/en-US');
        
        content_reference.once('value').then((data) => {
            this.home_page_content = data.val();
        }).catch((error) => {
            console.error(error);
            this.errored = true;
        }).finally(() => this.loading = false)
        console.log(this.home_page_content);
    },
}
</script>
