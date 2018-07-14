<template>
<div id="project__wrapper columns" class="card">
  <div class="project__container column is-three-fifths is-offset-one-fifth">
    <v-carousel
        delimiter-icon="stop"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
    </v-carousel>
        <!-- Details about the project -->
        <section class="project__details section-one">
            <slot>HELLO WORLD</slot>
            <bbutton externalLink="http://ruggedwerx.com" btnText="See Website"></bbutton>
        </section>
    </div>
</div>
</template>
<script>
import bbutton from '@/components/0-Global/bButton'
// Should implement some data for reactivity
// If we could have an imgsrc attribute for this, and then multiple slots
// Then we could reuse this component in the future for more and more projects
export default {
    name: 'bproject',

    components: {
      bbutton
    },
    
    data () {
        return {
            items: [
                {
                    src: '/RuggedWerx/Ruggedwerx-snip-1.PNG'
                },
                {
                    src: '/RuggedWerx/Ruggedwerx-snip-3.PNG'
                },
                {
                    src: '/RuggedWerx/Ruggedwerx-snip-4.PNG'
                },
                {
                    src: '/RuggedWerx/Ruggedwerx-snip-5.PNG'
                },
                {
                    src: '/RuggedWerx/RuggedWerx-snip-6.PNG'
                }
            ]
        }
    }

}
</script>
<style>
#project__wrapper {
    height: 50vh;
    width: 75%;
    margin: 100px;
    color: white;
    background: #6e7f80;
}
.project__details {
    padding: 45px;
    width: 100%;
    margin: auto;
    border-radius: 0;
    font-size: 1.15em;
}
.reveal__container {
  width: 100%;
  height: 50%;
  background-color: indigo;
  z-index: 10;
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
