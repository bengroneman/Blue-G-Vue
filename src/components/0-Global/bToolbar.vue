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
    </div>

      <div class="navbar-end">
        <router-link to="/" class="navbar-item">
          Home
        </router-link>

        <router-link to="/contact" class="navbar-item">
          Contact
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
    border-bottom: 2px solid #54d0ba;
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

</style>

