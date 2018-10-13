<template>
<nav class="navbar fixed-top navbar-expand-lg b-toolbar">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navbar--parent--wrapper" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto navbar-grid">
      <li class="nav-item active">
        <router-link class="nav-link" to="/"> Home </router-link><span class="sr-only">(current)</span>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About </router-link>
      </li>
			<li class="nav-item">
        <router-link class="nav-link" to="/projects">Projects</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Contact Me</a>
          <a class="dropdown-item" href="#">Coming Soon</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Coming Soon</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
	export default {
		name: 'btoolbar'
	}
</script>
<style>
.b-toolbar {
  position: fixed!important;
  top: 0;
  z-index: 100;
  font-weight: bold;
  background-color: rgba(25, 37, 48, 0.85);
}
.navbar {
  letter-spacing: 0.025em;
}
.navbar > a {
  color: white;
  text-transform: uppercase;
}
.navbar-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  margin: auto;
}
.nav-item .active {
  background-color: black;
}
.active {
  border-bottom: 2px solid #54d0ba;
  color: white!important; 
}
.nav-item > a {
  color: #54d0ba;
  text-transform: uppercase;
}
.b-toolbar-link {
  font-size: 1.35em;
  letter-spacing: 0.15em;
}
.toolbar__items .btn {
  margin-left: 10px!important;
  margin-bottom: 10px!important;
}
.b-brand-green {
 color: #54d0ba!important;
 font-weight: 900;
}
</style>
