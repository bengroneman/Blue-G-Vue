<template>
<div class="project-maw--wrapper">
  <bsubpagehero
    hero_title="The Museum of the American West"
    hero_sub_title="A Blue G. Development Project"
  ></bsubpagehero>

  <projectpagelayout 
    hero_img_src="/img/projects/maw.PNG"
    hero_img_alt="maw above fold view"
    project_header="MAW"
    project_sub_header="A Blue G. Development Project"
    job_title="Volunteer Development "
    project_date="@2018"
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

</style>



