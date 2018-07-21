<template>
  <div id="about" class="columns full-height">
    <div class="column section-one is-8 is-offset-2">
      <div class="columns">
        <div class="column child is-6">
          <div class="b-content__wrapper">
            <!-- B Info Header -->
            <h1><span class="content-shallom">Shallom</span> world</h1>
            <!-- B Info content -->
            <p>
              Hello my name is Ben Groneman I am a passionate developer based out of Lander Wyoming. I have a strong focus on human based design and application implementation.
              My journey with web development began in the wonderful world of Wordpress and PHP, since then I have branched out using Javascript frameworks.
              I am quite fond of the Vuejs framework (which is what is what the site you are looking at now is built on). Have fun and enjoy the website.
            </p>
            <bline></bline>
          </div>
        </div>
        <!-- Icon Column -->
        <div class="column child is-6 info-icon__section">
            <span class="curly-brackets">{ }</span>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import bnavcolumn from '@/components/2-Section/bNavColumn'
import bcontentcolumn from '@/components/2-Section/bContentColumn'
import bline from '@/components/0-Global/bLine.vue'

export default {
    name: 'binfosection',

    components: {
        bnavcolumn,
        bcontentcolumn,
        bline
    }
}
</script>
<style>
.info-icon__section > span {
  font-size: 25em;
  color: #54d0ba;
  text-align: right;
}
.b-content__wrapper {
  text-align: left;
  font-size: 1.5em;
}
.b-content__wrapper > p {
  font-family: 'Nunito', serif;
  font-weight: 300;
  letter-spacing: 0.025em;
}
.content-shallom {
  font-weight: 900;
}
.curly-brackets {
  font-family: 'Quattrocento', serif;
}
</style>
