<template>
  <div class="ruggedwerxproject">
    <bprojecttemplate
      projectHeader="Ruggedwerx"
      projectSubHeader="A Wyoming Inc Project"
    >
      This was a project built through Wyoming Inc. There was a lot of design work
      that has gone into this project, from the wonderful people at Wyoming Inc.
      I recieved an indesign mockup of the website, from there I was solely responsible 
      for building up the front end of the website using Wordpress, Visual Composer,
      jQuery, PHP, and CSS. Along with this I was also utilzing a custome API built by 
      Jared Kail, to intetgrate custom Visual Composer addons to the website, when more
      interactivity was required.
    </bprojecttemplate>      
  </div>
</template>
<script>
import bprojecttemplate from '@/views/project_template/bProjectTemplate'

export default {
    components: {
        bprojecttemplate
    }
}
</script>

