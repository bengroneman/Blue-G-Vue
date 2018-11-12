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
			<li class="nav-item">
        <router-link class="nav-link" to="/projects">Projects</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <transition name="fall">
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/blog">Blog</router-link>
            <router-link class="dropdown-item" to="/contact">Contact Me</router-link>
            <div class="dropdown-divider"></div>
          </div>
        </transition>
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
  font-weight: regular;
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
.active {
  background-color: rgba(43 43, 43, 0.6);
  border-bottom: 2px solid #54d0ba;
  color: white!important; 
  border-radius: 5px;
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

/*Animations yo!*/
.fall-enter-active {
  animation: fall 0.3s;
}

.fall-leave-active {
  animation: fall 0.3s reverse;
}
.dropdown-menu {
  animation: fall 0.3s;
}

@keyframes fall {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(100%);
  }
}


</style>

