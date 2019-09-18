<template>
<nav id="b-navigation-bar" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">

  <a @click="is_mobile_menu_open = !is_mobile_menu_open"
    role="button"
    class="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="blue-navbar"
    v-bind:class="{ 'is-active': is_mobile_menu_open, '': !is_mobile_menu_open }"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>

  <div
    id="blue-navigation"
    v-bind:class="{ 'is-active navbar-menu': is_mobile_menu_open, 'navbar-menu': !is_mobile_menu_open }"
    class="navbar-menu"
  >
    <div class="text-is--light-grey navbar-start text-is-left">
      <!--TODO: implement window.location.href -->
      <router-link to="/">
        <span class="console--line">$ cd /home/</span>
      </router-link>
      <span class="blinking--cursor"></span>
    </div>

      <div class="navbar-end">
        <router-link to="/about" class="navbar-item">
          About
        </router-link>

        <router-link to="/projects" class="navbar-item">
          Projects
        </router-link>
      </div>
  </div>
</nav>

</template>
<script>
export default {
    name: 'btoolbar',
    data: () => {
      return {
          is_mobile_menu_open: false
      }
    },
}
</script>
<style>
.navbar {
    background-color: #252627!important;
}
.navbar-menu {
    max-width: 768px;
    justify-content: center;
    margin: auto;
}
.navbar > a {
    color: white;
    text-transform: uppercase;
}
.navbar .active {
    background-color: rgba(43 43, 43, 0.6);
    color: white!important; 
}
.navbar-start {
    font-size: 18px;
    font-emphasis: 700;
    
}
.console--line {
    font-weight: 800;
    font-size: x-large;
    color: #a9a9b3!important;
}
.blinking--cursor {
    height: 75%;
    width: 15px;
    background-color: teal;
    margin-left: 5px;
    margin-bottom: 0;
    -webkit-animation: blink 1s 2s infinite; /* Safari 4+ */
    -moz-animation:    blink 1s 2s infinite; /* Fx 5+ */
    -o-animation:      blink 1s 2s infinite; /* Opera 12+ */
    animation:         blink 1s 2s infinite; /* IE 10+, Fx 29+ */
}
@-webkit-keyframes blink {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}
@-moz-keyframes blink { 
    0%   { opacity: 1; }
    100% { opacity: 0; }
}
@-o-keyframes blink { 
    0%   { opacity: 1; }
    100% { opacity: 0; }
}
@keyframes blink {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}
</style>

