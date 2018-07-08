<template>
<div id="project__container" class="card">
  <div class="project__container">
    <v-carousel hide-delimiters>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
    </v-carousel>
    <!-- Details about the project -->
    <p><slot></slot></p>
    <button id="project_btn" href="http://ruggedwerx.com">See Work</button>
  </div>
</div>
</template>
<script>
// Should implement some data for reactivity
// If we could have an imgsrc attribute for this, and then multiple slots
// Then we could reuse this component in the future for more and more projects
export default {
    name: 'bproject', 
        imgsrc: String,
        siteurl: String 
    },
    data () {
        return {
            items: [
                {
                    src: this.imgsrc
                }
            ]
        }
    }

}
</script>
<style>
.reveal__container {
  width: 100%;
  height: 50vh;
  background-color: indigo;
  z-index: 10;
}
.active-content-class {
    bottom: 0;
}
.inactive-content-class {
    bottom: -1000px;
}

/* Can come back to this later as it might be useful VUE JS TRANSITION -- SLIDE FADE */
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
