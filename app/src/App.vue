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
    <div class="fluid__container skills-section">
        <bskillsection></bskillsection> 
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ruggedwerx">RuggedWerx</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import btoolbar from '@/components/0-Global/bToolbar'
import bcta from '@/components/1-Section/bCta'
import binfosection from '@/components/2-Section/bInfoSection'
import bskillsection from '@/components/3-Section/bSkillSection'

export default {
    components: {
        btoolbar,
        bcta,
        binfosection,
        bskillsection
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.parent {
    display: flex;
}
.child {
    margin: auto;
}
.quote-blurb {
    background: #6e7f80;
    font-weight: 900;
    margin: auto;
}
.quote-blurb > h2 {
    font-size: 2em;
}
.skills-section {
    background: #36454f;
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
    border: 1px solid gainsboro;
    margin: 60px!important;
    box-shadow: 0px 2px 13px 0px gainsboro;
    border-radius: 2em;
}
</style>
