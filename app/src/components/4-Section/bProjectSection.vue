<template>
<section class="b-project-section">
  <div class="b-project__wrapper">
    <v-container color="b-brand-black" class="b-jumbotron" fill-height>
        <v-layout align-center>
            <v-flex text-xs-center>
                <!-- Open Source Advocate Section  -->
                <div class="b-project-content__wrapper">
                    <h2 class="is-size-1">I am a big advocate for open source</h2>
                    <h3 class="is-size-2">Find me @strangenectar on github</h3>
                    <div class="portfolio-experiment">
                      <bbutton externalLink="https://github.com/strangenectar" btnIcon="code" btnText="Open Source"></bbutton>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</section>
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
    }
}
</script>
<style>
.b-project-content__wrapper {
    max-height: 550px;
    max-width: 550px;
    border: 5px solid white;
    margin: auto;
    text-align: center;
    padding: 25px;
}
.b-brand-black {
    background-color: #01060f;
}
.b-jumbotron {
  height: 100vh!important;
}
.b-project-section {
  height: 100%;
    color: white;
}
.b-project__wrapper {
 background: linear-gradient(rgba(16,90,146, 0.85), rgba(1, 6, 5, 0.85));
 height: 100%;
 width: 100%;

}
</style>
