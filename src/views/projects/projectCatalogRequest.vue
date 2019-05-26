<template>
  <div class="project--catalog-request">
    <bsubpagehero
        :hero_title="catalogRequest.projectHeader"
        :hero_sub_title="catalogRequest.subHeader"
        class="has-purple--gradient"
      ></bsubpagehero>
    <projectpagelayout 
      hero_img_src="/img/projects/catalog-request.png"
      hero_img_alt="catalogRequest above fold view"
      :site_href="catalogRequest.projectUrl"
    >
      <template name="project_header">
        <h2>
          <em class="md-heading-1 md-heading color-is--grey"> # </em>
          {{ catalogRequest.projectHeader }}
        </h2>
      </template>
      <template name="project_sub_header">
        <h3>
          <em class="md-heading-3 md-heading color-is--grey">###</em>
          {{ catalogRequest.subHeader }}
        </h3>
      </template>
      <template name="project_details">
        <h6 class="pb-2">
          <span class="md-date-author">
            <em>
              {{ catalogRequest.jobTitle }}
            </em>
            {{ catalogRequest.projectDate }}
          </span>
        </h6>
      </template>

      <!-- this content will be slotted into projectpage layout -->
      <div class="every-p--pb-2" id="ruggedwerx" v-html="this.catalogRequest.projectContent"></div>
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
            catalogRequest: {},
            errored: false,
            loading: true
        }
    },
    mounted: function() {
        const database = firebase.database();
        const content_reference = database.ref('flamelink/environments/production/content/projectCards/en-US/1558896487216');
        
        content_reference.once('value').then((data) => {
            this.catalogRequest = data.val();
            console.log(data.val());
        }).catch((error) => {
            console.error(error);
            this.errored = true;
        }).finally(() => this.loading = false)
    },

}
</script>
<style scoped>
.has-purple--gradient {
  background-image: linear-gradient(141deg, #1fa5e2 0%, #7c7cbb 71%, #153969 100%)!important;
}
.pb-2 {
    padding-bottom: 20px;
}
.every-p--pb-2 > p {
    padding-bottom: 20px;
}
</style>
