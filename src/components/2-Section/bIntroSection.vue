<template>
<twocolumnlayout class="margin-top-bottom">
  <template slot="left-column">
    <!-- B Info Header -->
    <h1 class="b-about__header"><span class="content-shallom">Hello</span> world</h1>
    <!-- B Info content -->
    <p class="b-about__content">
    My name is Ben Groneman. I am a progressive web developer with a demonstrated history of working in diverse development environments. I have skills including JavaScript, Hubspot, Python, and a heavy focus on mobile Web Development. I love the Linux kernel, and I am a heavy Vim user (you can find my vimrc file <a href="https://github.com/bengroneman/strangevimrc" target="_blank" alt="link to my vimrc file">here</a>), with that in mind, I still carry a heavy focus on accessibility and user-focused design. With an Associate’s Degree focused on Math and Computer Science from Central Wyoming College; I intend to assert myself into the Web Development workforce and develop elegant solutions to complex problems.
    </p>
    <!-- Accent Line -->
    <bline></bline>
    <a href="#skill-section">
      <button id="b-btn" type="button" class="btn my-code--btn">
        <i class="fas fa-arrow-down" aria-hidden="true"></i>
        My Code
      </button>
    </a>
  </template>
  <template slot="right-column">
    <div class="info-icon__section">
      <span>{ }</span>
    </div>
  </template>
</twocolumnlayout>
</template>
<script>
import bline from '@/components/0-Global/bLine.vue'
import twocolumnlayout from '@/components/Layouts/twoColumnLayout'

export default {
    name: 'bintrosection',

    components: {
        bline,
        twocolumnlayout
    }
}
</script>
<style>
.info-icon__section > span {
  font-size: 10em;
  color: #54d0ba;
  text-align: right;
  margin: auto;
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
.b-about__row {
	height: 100%;
  margin: 125px auto 125px auto;
}
.curly-brackets {
	font-size: 15em;
	margin: 45px;
	color: #54d0ba;
}
.b-about__content {
  font-size: 1.25em; 
  text-align: left;
}
.my-code--btn {
  margin: 25px auto auto 0px!important;
  left:0;
}
.my-code--btn > i {
	color: white;
	padding: 5px;
}
</style>
