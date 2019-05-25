<template>
  <section class="project-ruggedwerx--container" aria-label="ruggedwerx project section">
    <div class="project-ruggedwerx--wrapper">
      <div class="project-image--wrapper">
        <img :src="hero_img_src" :alt="hero_img_alt" id="project-image" width="1024" />
      </div>
      <div class="project-content--wrapper">

        <h1 class="dive">
          <slot name="project_header"></slot>
        </h1>
        <h3>
          <slot name="project_sub_header"></slot>
        </h3>
        <slot name="project_details"></slot>

        <!-- slot in the content -->
        <slot></slot>
        <br>
        <aside class="project-button--wrapper">
          <a id="b-btn" :href="site_href" class="b-btn" target="_blank">Visit Site</a>
          <a v-if="repo_href" id="b-btn" :href="repo_href" class="b-btn" target="_blank">See Code</a>
        </aside>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'projectpagelayout',
  props: {
    hero_img_src: String,
    hero_img_alt: String,
    site_href: String,
    repo_href: String
  }
}
</script>
<style>
.project-ruggedwerx--container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #151f28;
}
.project-ruggedwerx--wrapper {
  margin: auto;
  background-color: white;
  border-radius: 5px;
  margin: 100px auto 100px auto;
  width: 1024px;
}
.project-content--wrapper {
  padding: 45px;
  text-align: left;
}
.project-content--wrapper .dive > em {
  color: #a9a9a9;
}
.project-image--wrapper {
  width: 1024px;
}
.project-image {
  height: 100%;
  width: 100%;
}

/*Under construction section -> comment out if testing content*/
.under-construction {
  width: 100%;
  margin: 20px;
  height: 100%;
  z-index: 12;
  background-color: #efefef;
  border-radius: 12px;
}
/* .under-construction::after {
  content: "Under Construction";  
  display: flex;
  margin: auto;
} */
.under-construction > * {
  opacity: 0;
}
</style>
