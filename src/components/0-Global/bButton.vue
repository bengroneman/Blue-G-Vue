<template>
<div class="b-btn__container">
  <a id="b-btn--a" :href="externalLink">
    <span class="text"><i class="fas {!! btnIcon !!}"></i>{{btnText}}</span>
  </a>
</div>
</template>
<script>
// TODO: Validate our props -> this is a best practice
export default {
  name: 'bbutton',
  props: {
    btnIcon: String,
    externalLink: String,   // TODO: add regex validator here
    btnText: String
  }
}
</script>
<style>
.b-btn__container {
	height: 75px;
	max-width: 150px;
	margin: auto;
	background: transparent;
	border: 2px solid beige;
	display: flex;
}


#b-btn--a:hover {
	box-shadow: inset 4000px 0 0 0 #202f3e;
  color: white;
}
#b-btn--a {
	margin: auto;
	color: #202f3e;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.035em;
	overflow: hidden;
	display: flex;
	height: 100%;
	width: 100%;
	transition: all ease-in-out 1.4s;
  transition: color ease 0.2s;
  box-shadow: inset 0 0 0 0 black;
}
#b-btn--a span {
	margin: auto;
}

</style>
