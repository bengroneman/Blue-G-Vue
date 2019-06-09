<template>
  <div class="project-topline--wrapper">
    <bsubpagehero
        :hero_title="topline.projectHeader"
        :hero_sub_title="topline.subHeader"
        class="has-pink-orange--gradient"
      ></bsubpagehero>
    <projectpagelayout 
      hero_img_src="/img/topline.png"
      hero_img_alt="maw above fold view"
      :site_href="topline.projectUrl"
    >
      <template name="project_header">
        <h2>
          <em class="md-heading-1 md-heading color-is--grey"> # </em>
          {{ topline.projectHeader }}
        </h2>
      </template>
      <template name="project_sub_header">
        <h3>
          <em class="md-heading-3 md-heading color-is--grey">###</em>
          {{ topline.subHeader }}
        </h3>
      </template>
      <template name="project_details">
        <h6 class="pb-2">
          <span class="md-date-author">
            <em>
              {{ topline.jobTitle }}
            </em>
            {{ topline.projectDate }}
          </span>
        </h6>
      </template>

      <!-- this content will be slotted into projectpage layout -->
      <div class="every-p--pb-2" id="maw" v-html="this.topline.projectContent"></div>
    </projectpagelayout>

  </div>

</template>
<script>
import firebase from 'firebase';

import projectpagelayout from '@/views/projects/layout/projectPageLayout.vue' 
import bsubpagehero from '@/components/1-Hero/bSubPageHero.vue'

export default {
    name: 'projecttopline',
    components: {
        projectpagelayout,
        bsubpagehero,
    },
    data() {
        return {
            topline: {},
            errored: false,
            loading: true
        }
    },
    mounted: function() {
        const database = firebase.database();
        const content_reference = database.ref('flamelink/environments/production/content/projectCards/en-US/1558896021953');
        
        content_reference.once('value').then((data) => {
            this.topline = data.val();
            console.log(data.val());
        }).catch((error) => {
            console.error(error);
            this.errored = true;
        }).finally(() => this.loading = false)
    },
}
</script>
<style scoped>
.has-pink-orange--gradient {
    background-image: linear-gradient(180deg, #CEBBAE 18%, #419082 84%, #B55C30 75%);
}
.pb-2 {
    padding-bottom: 20px;
}
.every-p--pb-2 > p {
    padding-bottom: 20px;
}
</style>
