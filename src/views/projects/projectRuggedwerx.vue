<template>
<div class="project--ruggedwerx">
  <bsubpagehero
      hero_title="Ruggedwerx"
      hero_sub_title="A Wyoming Inc. Development Project"
    ></bsubpagehero>
  <projectpagelayout 
    hero_img_src="/img/ruggedwerx.png"
    hero_img_alt="ruggedwerx above fold view"
    project_header="Ruggedwerx Project"
    project_sub_header="A Wyoming Inc. Project"
    job_title="Front-End Development @ Wyoming Inc."
    project_date="05-01-2018 => 07-01-2018"
    site_href="http://ruggedwerx.com"
  >

    <!-- Slotted content -->
    <div id="ruggedwerx">
      <p>
  This was a project built during my time with Wyoming Inc.; I was responsible for building out the front-end of a Wordpress website, based on a design mockup. I had a lot of fun building this website, I used Javascript (jQuery), CSS, and PHP, with a delightful team of experts.
      </p>
    </div>
  </projectpagelayout>
</div>
</template>
<script>
import projectpagelayout from '@/views/projects/layout/projectPageLayout.vue' 
import bsubpagehero from '@/components/1-Hero/bSubPageHero.vue'

export default {
  name: 'ruggedwerx',
  components: {
    projectpagelayout,
    bsubpagehero
  }
}
</script>
