<template>
<nav id="b-navigation-bar" class="navbar fixed-top navbar-expand-lg b-toolbar">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navbar--parent--wrapper" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto navbar-grid">
      <li class="nav-item">
        <router-link class="nav-link" to="/"> Home </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About </router-link>
      </li>
		  <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/projects/ruggedwerx">Ruggedwerx</router-link>
          <router-link class="dropdown-item" to="/projects/maw">MAW</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/projects/gwg">GWG</router-link>
        </div>
			</div>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact Me</router-link>
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
  font-weight: 500;
  /*background-color: rgba(25, 37, 48, 0.85);*/
  background-color: transparent;
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
.active {
  background-color: rgba(43 43, 43, 0.6);
  border-bottom: 2px solid #54d0ba;
  color: white!important; 
}
.nav-item > a {
  color: #54d0ba;
  text-transform: uppercase;
  margin: auto 20px auto 20px;
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
/*Once we scroll more than 200 px we will change the navigation bar styling*/
.navbar-slide {
  background: white!important;

}
.navbar-nav {
	background: #2b3e50;
	border-radius: 20px;
}

/*Animations yo!*/
@keyframes fall {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(100%);
  }
}


</style>

