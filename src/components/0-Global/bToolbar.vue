<template>
<nav id="b-navigation-bar" class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item">
      Ben G.
    </router-link>

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
  </div>

  <div
    id="blue-navigation"
    v-bind:class="{ 'is-active navbar-menu': is_mobile_menu_open, 'navbar-menu': !is_mobile_menu_open }"
  >
    <div class="navbar-start child">

      <router-link to="/" class="navbar-item">
        Coming Soon..
      </router-link>

      <router-link to="/" class="navbar-item">
        Home
      </router-link>

      <router-link to="/contact" class="navbar-item">
        Contact
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <router-link to="/projects" class="navbar-link">
          Projects
        </router-link>

        <div class="navbar-dropdown">
          <router-link to="/projects/ruggedwerx" class="navbar-item">
            Ruggedwerx
          </router-link>

          <router-link to="/projects/maw" class="navbar-item">
            MAW
          </router-link>
          <router-link to="/projects/topline" class="navbar-item">
            Topline
          </router-link>
          <hr class="navbar-divider">
          <!-- Set this up for website issues -->
          <router-link to="/contact" class="navbar-item">
            Report an issue
          </router-link>
        </div>
      </div>
        -->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
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
  }
}
</script>
<style>
.navbar > a {
  color: white;
  text-transform: uppercase;
}
.navbar .active {
  background-color: rgba(43 43, 43, 0.6);
  border-bottom: 2px solid #54d0ba;
  color: white!important; 
}
</style>

