<template>
  <div class="project--ruggedwerx">
    <bsubpagehero
        hero_title="Ruggedwerx"
        hero_sub_title="A Wyoming Inc. Development Project"
        class="has-purple--gradient"
      ></bsubpagehero>
    <projectpagelayout 
      hero_img_src="/img/ruggedwerx.png"
      hero_img_alt="ruggedwerx above fold view"
      :site_href="this.ruggedwerx.projectUrl"
    >
      <template name="project_header">
        <em class="md-heading-1 md-heading color-is--grey"> # </em>
        {{ ruggedwerx.projectHeader }}
      </template>
      <template name="project_sub_header">
        <em class="md-heading-3 md-heading color-is--grey">###</em>
        {{ ruggedwerx.subHeader }}
      </template>
      <template name="project_details">
        <span class="md-date-author">
          <em>
            {{ ruggedwerx.jobTitle }}
          </em>
          {{ ruggedwerx.projectDate }}
        </span>
      </template>


      <!-- this content will be slotted into projectpage layout -->
      <div id="ruggedwerx" v-html="this.ruggedwerx.projectContent"></div>
    </projectpagelayout>
  </div>
</template>
<script>
import firebase from 'firebase';
import projectpagelayout from '@/views/projects/layout/projectPageLayout.vue' 
import bsubpagehero from '@/components/1-Hero/bSubPageHero.vue'

export default {
    name: 'ruggedwerx',
    components: {
        projectpagelayout,
        bsubpagehero
    },
    data() {
        return {
            ruggedwerx: {},
            errored: false,
            loading: true
        }
    },
    mounted: function() {
        const database = firebase.database();
        const content_reference = database.ref('flamelink/environments/production/content/projectCards/en-US');
        
        content_reference.once('value').then((data) => {
            this.ruggedwerx = data.val();
            console.log(data.val());
        }).catch((error) => {
            console.error(error);
            this.errored = true;
        }).finally(() => this.loading = false)
        console.log(this.ruggedwerx);
    },

}
</script>
<style>
.has-purple--gradient {
  background-image: linear-gradient(141deg, #1fa5e2 0%, #7c7cbb 71%, #153969 100%)!important;
}
</style>
