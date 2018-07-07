<template>
<div
    id="project__container"
    class="card"
    @mouseenter="show = !show"
    @mouseleave="show = !show"
    >
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" id="project-img">
    </figure>
  </div>
<transition name="slide-fade">
  <div v-if="show" v-bind:class="changeHiddentContentClass" id="reveal-content" class="reveal__container">
      <p>This was a project build by a delightful team.</p>
  </div>
</transition>
</div>
</template>
<script>
// Should implement some data for reactivity
// If we could have an imgsrc attribute for this, and then multiple slots
// Then we could reuse this component in the future for more and more projects
export default {
    name: 'bprojectsection',
    data () {
        return {
            show: false
        }
    },
    computed: {
        changeHiddentContentClass() {
            if(this.show) {
                return 'active-content-class'
            } else {
                return 'inactive-content-class'
            }
        }
    }
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
#reveal-content {
  height: 100%;
  width: 100%;
  bottom: -100px;
  position: absolute;
  color: white;
  background-color: rgb(54, 69, 79);
  transition: 0.7s all ease-in-out;
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
