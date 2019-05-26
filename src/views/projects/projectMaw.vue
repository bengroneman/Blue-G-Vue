<template>
  <div class="project-maw--wrapper">
    <bsubpagehero
        :hero_title="maw.projectHeader"
        :hero_sub_title="maw.subHeader"
        class="has-purple--gradient"
      ></bsubpagehero>
    <projectpagelayout 
      hero_img_src="/img/projects/maw.PNG"
      hero_img_alt="maw above fold view"
      :site_href="maw.projectUrl"
    >
      <template name="project_header">
        <h2>
          <em class="md-heading-1 md-heading color-is--grey"> # </em>
          {{ maw.projectHeader }}
        </h2>
      </template>
      <template name="project_sub_header">
        <h3>
          <em class="md-heading-3 md-heading color-is--grey">###</em>
          {{ maw.subHeader }}
        </h3>
      </template>
      <template name="project_details">
        <h6 class="pb-2">
          <span class="md-date-author">
            <em>
              {{ maw.jobTitle }}
            </em>
            {{ maw.projectDate }}
          </span>
        </h6>
      </template>

      <!-- this content will be slotted into projectpage layout -->
      <div class="every-p--pb-2" id="maw" v-html="this.maw.projectContent"></div>
    </projectpagelayout>
  </div>
</template>
<script>
import firebase from 'firebase';

import projectpagelayout from '@/views/projects/layout/projectPageLayout.vue' 
import bsubpagehero from '@/components/1-Hero/bSubPageHero.vue'

export default {
    components: {
        projectpagelayout,
        bsubpagehero
    },
    data() {
        return {
            maw: {},
            errored: false,
            loading: true
        }
    },
    mounted: function() {
        const database = firebase.database();
        const content_reference = database.ref('flamelink/environments/production/content/projectCards/en-US/1558895936233');
        
        content_reference.once('value').then((data) => {
            this.maw = data.val();
            console.log(data.val());
        }).catch((error) => {
            console.error(error);
            this.errored = true;
        }).finally(() => this.loading = false)
    },

}
</script>
<style scoped>
.has-tan--gradient {
    backround-image: linear-gradient(141deg, #dcd3ae 0%, #a95d5d 71%, #dcd3ae 100%);
}
.pb-2 {
    padding-bottom: 20px;
}
.every-p--pb-2 > p {
    padding-bottom: 20px;
}

</style>
