<template>
  <section class="b-project-template__container">
    <div class="b-project-template__wrapper">
      <h1>{{ projectHeader }}</h1>
      <h3>{{ projectSubHeader }}</h3>
      <div class="b-project-template-body">
        <slot></slot> 
       </div>
       <div class="b-project-template-btn__wrapper">
        <bbutton
         :externalLink="projectLink" 
         btnIcon="arrow"
         btnText="Check it Out"
       ></bbutton>
       </div>
    </div>
  </section>
</template>
<script>
import bbutton from '@/components/0-Global/bButton.vue'

export default {
  name: 'bprojecttemplate',
  
  components: {
    bbutton
  },
  
  props: {
    projectHeader: String,
    projectSubHeader: String,
    isActive: Boolean,
    projectLink: String
  }
}
</script>
<style>
.b-project-template__container {
  width: 100%;
  height: 100%;
}
.b-project-template__wrapper {
  margin: 45px;
}
</style>
