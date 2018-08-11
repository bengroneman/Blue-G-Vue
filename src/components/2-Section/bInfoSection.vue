<template>
<div class="container b-about__container">
    <div class="row align-items-center b-about__row">
        <!-- About Me content column -->
        <div class="col text-left">
            <!-- B Info Header -->
            <h1 class="b-about__header"><span class="content-shallom">Shallom</span> world</h1>
            <!-- B Info content -->
            <p class="b-about__content">
                Hello my name is Ben Groneman I am a passionate developer based out of Lander Wyoming. I have a strong focus on human based design and application implementation.
                My journey with web development began in the wonderful world of Wordpress and PHP, since then I have branched out using Javascript frameworks.
                I am quite fond of the Vuejs framework (which is what is what the site you are looking at now is built on). Have fun and enjoy the website.
            </p>
            <!-- Accent Line -->
            <bline></bline>
        </div>
        <!-- About me Art // Brackets -->
        <div class="col">
            <!-- Icon Column -->
            <span class="curly-brackets">{ }</span>
        </div>
    </div>
</div>
</template>
<script>
import bline from '@/components/0-Global/bLine.vue'

export default {
    name: 'binfosection',

    components: {
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
  font-size: 1.25em;
  font-weight: 100;
}
.content-shallom {
  font-weight: 900;
}
.b-about__header {
    font-size: 5em;
}
.b-about__container {
	height: 100vh;
}
.b-about__wrapper {
	height: 100%;
}
.b-about__row {
	height: 100%;
}
.curly-brackets {
    font-size: 15em;
    margin: 45px;
    color: #54d0ba;
}
.b-about__content {
    font-size: 1.5em; 
}
</style>
