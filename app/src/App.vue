<template>
  <div id="app">
    <btoolbar></btoolbar>
    <bcta></bcta>
    <binfosection></binfosection>    
    <!-- Small section // Quote blurb -->
    <v-container fluid class="quote-blurb fluid__container">
        <h2 class="text-xs-center"><em>No valid plans for the future can be made by those who have no capacity for living now.
        </em></h2><p class="text-xs-center">-- Alan Watts</p> 
    </v-container>
    <!-- Blue G Skill Section -->
    <div class="fluid__container full-height skills-section">
        <bskillsection></bskillsection> 
    </div>
    <!-- Blue G Project Section -->
    <bprojectsection></bprojectsection>
    <!-- Blue G Footer-->
    <bfooter></bfooter>
  </div>
</template>
<script>
import btoolbar from '@/components/0-Global/bToolbar'
import bcta from '@/components/1-Section/bCta'
import binfosection from '@/components/2-Section/bInfoSection'
import bskillsection from '@/components/3-Section/bSkillSection'
import bfooter from '@/components/Footer/bFooter.vue'
import bprojectsection from '@/components/4-Section/bProjectSection'

export default {
    components: {
        btoolbar,
        bcta,
        binfosection,
        bskillsection,
        bfooter,
        bprojectsection
    }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 30px 0 30px;
}
code {
  box-shadow: none!important;
  -webkit-box-shadow: none!important;
  color: white!important;
}
pre {
 background-color: transparent;
 border: none;
}
.full-height {
  height: 100%;
}
.b-brand-dark {
  color: !important;
}
#nav a {
  font-weight: bold;
  font-size: 1.5em;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  position: relative;
  bottom: 15px;
}

#nav a.router-link-exact-active {
  color: #6e7f80;
  border-bottom: 5px solid #6e7f80;
}
.parent {
    display: flex;
}
.child {
    margin: auto;
}
button {
    background-color: #36454f!important;
    padding: 25px;
    transition: 0.7s all ease;
}
button > a {
    color: white;
    text-transform: uppercase;
    border-bottom: 3px solid #6e7f80;
    font-weight: 900;
    transition: 0.7s all ease;
}
button > a:hover {
    color: white;
}
button:hover {
    box-shadow: -6px 7px 0px 0px #6e7f80;
}
h1, h2, h3, h4 {
  font-family: 'Nunito', serif;
  font-size: 3em;
	font-weight: 100;
	margin-bottom: 0.35em;
}
h2 {
    font-size:2em!important;
}
p, a, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 1.025em;
}
body, html {
  font-family: 'Nunito', serif;
}
.quote-blurb {
    background: #01060f;
    font-weight: 900;
    margin: auto;
}
.quote-blurb > h2 {
    font-size: 2em;
    margin-top: 45px;
    margin-bottom: 45px;
}
.quote-blurb > p {
  font-size: 1.5em;
  font-weight: 500;
  color: #54d0ba;
}
.skills-section {
    background: #202f3e;
    height: 100%!important;
}
.fluid__container {
    margin: 0;
    width: 100%!important;
    color: white;
}
.b-project-section {
    background: radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #7a7a7a 10px, rgba(96, 16, 48, 0) 11px) 0px 10px, radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #7a7a7a 10px, rgba(96, 16, 48, 0) 11px), #0a0a0a; 
    background-size: 20px 20px;
    width: 100%;
    height: 100%;
}
.section-one {
    background: white;
    margin: 75px;
}
</style>
