<template>
<div id="project__container" class="card">
  <div class="project_carousel">
      <p><slot></slot></p>
  </div>
</div>
</template>
<script>
// Should implement some data for reactivity
// If we could have an imgsrc attribute for this, and then multiple slots
// Then we could reuse this component in the future for more and more projects
export default {
    name: 'bprojectsection'
}
</script>
<style>
.reveal__container {
  width: 100%;
  height: 25%;
  background-color: indigo;
  z-index: 10;
}
#project__container {
    background-color: #36454f;
    text-align: center;
    box-shadow: -6px 7px 0px 0px #708090;
    overflow: hidden;
    transition: 0.5s box-shadow ease-in-out;
}
#project__container:hover {
  box-shadow: -8px 9px 11px 0px #708090;
}
.active-content-class {
    bottom: 0;
}
.inactive-content-class {
    bottom: -1000px;
}
.mouse-hover:hover {
    width: 1000px!important;
}
/* VUE JS TRANSITION -- SLIDE FADE */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}
</style>
