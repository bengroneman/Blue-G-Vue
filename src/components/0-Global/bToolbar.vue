<template>
<nav class="navbar fixed-top navbar-expand-lg b-toolbar">
  <a class="navbar-brand" href="#">Blue G Development</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
			<li class="nav-item">
        <a class="nav-link" href="#skills">Skills</a>
      </li>
			<li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
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
  font-family: 'Nunito', serif;
  font-weight: bold;
  background-color: rgb(32, 47, 62);
}
.navbar {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.025em;
}
.navbar > a {
  color: white;
  text-transform: uppercase;
}
.nav-item .active {
  background-color: black;
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
 font-family: 'Nunito-Bold', sans-serif;
}
</style>
