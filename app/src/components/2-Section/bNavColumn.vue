<template>
<div class="b-nav__column columns">
	<ul class="b-nav__menu column">
		<li><a>About</a></li>
		<li><a>Skills</a></li>
		<li><a>Work</a></li>
		<li><a>Blog</a></li>
		<li><a>Contact</a></li>
	</ul>
</div>
</template>
<script>
export default {
	name: 'bnavcolumn'
}
</script>
<style scoped>
.b-nav__menu > li {
    margin-top: 12px;
    margin-bottom: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 600;
}
.b-nav__menu {
    background-color: #36454f;
    text-align: center;
    padding: 20px;
    border: 1px solid #708090;
    box-shadow: -6px 7px 0px 0px #708090;
}
.b-nav__column {
	float: right;
	margin-top: 8em;
}
a {
   color: white!important;
   border-bottom: 3px solid #6e7f80;
   transition: 0.25s all ease;
}
a:hover {
    background-color: #6e7f80;
}
</style>
