<template>
  <div class="project-maw--wrapper">
    <bsubpagehero
      hero_title="The Museum of the American West"
      hero_sub_title="A Blue G. Development Project"
      class="has-tan--gradient"
    ></bsubpagehero>

    <projectpagelayout 
      hero_img_src="/img/projects/maw.PNG"
      hero_img_alt="maw above fold view"
      project_header="MAW"
      project_sub_header="A Blue G. Development Project"
      job_title="Volunteer Development "
      project_date="@2018"
      site_href="http://museumoftheamericanwest.com"
      repo_href="https://github.com/bengroneman/blue_maw.git"
    >

      <!-- Slotted content -->
      <div id="maw">
        <p>

        </p>
      </div>
    </projectpagelayout>
  </div>
</template>
<script>
import projectpagelayout from '@/views/projects/layout/projectPageLayout.vue' 
import bsubpagehero from '@/components/1-Hero/bSubPageHero.vue'

export default {
  components: {
    projectpagelayout,
    bsubpagehero
  }
}
</script>
<style>
.has-tan--gradient {
  backround-image: linear-gradient(141deg, #dcd3ae 0%, #a95d5d 71%, #dcd3ae 100%);
}
</style>



