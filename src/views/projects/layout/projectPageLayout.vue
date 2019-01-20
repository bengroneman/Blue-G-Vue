<template>
  <section class="project-ruggedwerx--container" aria-label="ruggedwerx project section">
    <div class="project-ruggedwerx--wrapper">
      <div class="project-image--wrapper">
        <img :src="hero_img_src" :alt="hero_img_alt" id="project-image" width="1024" />
      </div>
      <div class="project-content--wrapper">

        <div class="under-construction">
        <h1 class="dive">
          <em class="md-heading-1 md-heading color-is--grey"> # </em> {{ project_header }}
        </h1>
        </div>
        <div class="under-construction">
        <h3 class="dive under-construction">
          <em class="md-heading-3 md-heading color-is--grey">###</em> {{ project_sub_header }}
        </h3>
        </div>
        <div class="under-construction">
        <span class="md-date-author under-construction"><em>{{ job_title }}</em>{{ project_date }}</span>
        </div>
        <!-- slot in the content -->
        <div class="under-construction">
        <slot></slot>
        </div>

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
    project_header: String,
    project_sub_header: String,
    job_title: String,
    project_date: String
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
