<template>
  <div class="project-maw--wrapper">
    <bsubpagehero
      hero_title="Topline General Store"
      hero_sub_title="A Blue G. Development Project"
      class="has-pink-orange--gradient"
    ></bsubpagehero>

    <projectpagelayout 
      hero_img_src
      hero_img_alt="topline general store"
      project_header="Topline"
      project_sub_header="A Blue G. Development Project"
      job_title="Website Architect"
      project_date="@2019"
      site_href="https://toplinestore.netlify.com"
      repo_href="https://github.com/bengroneman/topline_store"
    >

      <!-- Slotted content -->
      <div id="topline">
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
  name: 'projecttopline',
  components: {
    projectpagelayout,
    bsubpagehero,
  }
}
</script>
<style>
.has-pink-orange--gradient {
  background-image: linear-gradient(180deg, #CEBBAE 18%, #419082 84%, #B55C30 75%);
}
</style>
