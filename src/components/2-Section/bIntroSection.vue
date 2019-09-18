<template>
<section id="about">
  <twocolumnlayout class="margin-top-bottom">
    <template slot="left-column">
      <!-- B Info Header -->
      <h1 class="b-about__header text-is-left"><span class="content-shallom">Hello</span> world</h1>
      <!-- B Info content -->
      <p class="b-about__content">
      My name is Ben Groneman. I am an avid software engineer with a demonstrated history of working in diverse development environments. I started working on the web as a PHP developer with a small team to build a website for a Welding/Fabrication company known as <a href="https://ruggedwerx.com" alt="ruggedwerx website">Ruggedwerx</a>. I have since transitioned into <span class="is-special--keyword">Go</span>, and <span class="is-special--keyword">Python</span>. Browse through code I've <a href="https://github.com/bengroneman" alt="ben gronemans github profile">written</a>. 
      </p>
      <p class="b-about__content">
      I am quite fond of the Linux kernel, and I am a regular <span class="is-special--keyword">Vim</span> user (you can find my .vimrc file <a href="https://github.com/bengroneman/strangevimrc" alt="ben gronemans vimrc repository">here</a>). During development I have a focus on accessibility, efficiency, and <span class="is-special--keyword">empathy</span> for the end-user. With a Degree in Computer Science, and a passion to learn, I intend to engineer <span class="is-special--keyword">elegant</span> solutions to complex problems.
      </p>
      <!-- Accent Line -->
      <bline></bline>
    </template>
    <template slot="right-column">
      <div class="info-icon__section">
        <span class="animated--brackets">{ }</span>
      </div>
    </template>
  </twocolumnlayout>
</section>
</template>
<script>
import bline from '@/components/0-Global/bLine.vue';
import twocolumnlayout from '@/components/Layouts/twoColumnLayout.vue';

export default {
    name: 'bintrosection',

    components: {
        bline,
        twocolumnlayout
    },
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
    margin-top: 25px;
}
.my-code--btn {
    margin: 25px auto auto 0px!important;
    left:0;
}
.my-code--btn > i {
	  color: white;
	  padding: 5px;
}
.animated--brackets {
    -webkit-animation: scale 1s 2s infinite; /* Safari 4+ */
    -moz-animation:    scale 1s 2s infinite; /* Fx 5+ */
    -o-animation:      scale 1s 2s infinite; /* Opera 12+ */
    animation:         scale 1s 2s infinite; /* IE 10+, Fx 29+ */
}
@-webkit-keyframes scale {
    0%   { transform: scale(1.25); }
    100% { transform: scale(1); }
}
@-moz-keyframes scale { 
    0%   { transform: scale(1.25); }
    100% { transform: scale(1); }
}
@-o-keyframes scale { 
    0%   { transform: scale(1.25); }
    100% { transform: scale(1); }
}
@keyframes scale {
    0%   { transform: scale(1.25); }
    100% { transform: scale(1); }
}

</style>
