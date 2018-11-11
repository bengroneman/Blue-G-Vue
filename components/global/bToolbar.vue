<template>
<b-navbar class="b-toolbar" toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="b-toolbar--array">
      <b-nav-item href="#">Home</b-nav-item>
			<b-nav-item href="about">About</b-nav-item>
			<b-nav-item href="projects">Projects</b-nav-item>
			<b-nav-item href="blog" disabled>Blog</b-nav-item>
			<b-nav-item href="contact">Contact</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>


</template>
<script>
	export default {
		name: 'btoolbar'
	}
</script>
<style>
.b-toolbar {
  font-weight: bold;
  background-color: rgba(25, 37, 48, 0.85)!important;
	text-align: center;
	display: flex;
	text-transform: lowercase;
	font-size: 1.075em;
}
.b-toolbar--array {
	margin: auto;
}
.b-toolbar--array li > a {
	margin: auto 20px auto 20px;
}
</style>

