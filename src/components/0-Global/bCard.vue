<template>
<div class="card b-grid-child__item">
  <img class="card-img-top" :src="imgsrc" :alt="imgsrc">
  <div class="card-body">
  <div class="card-skills">
    <span v-if="skillisJS" class="b-skill b-skill-is-js">Javascript</span>
    <span v-if="skillisVUE" class="b-skill b-skill-is-vue">VueJS</span>
    <span v-if="skillisWP" class="b-skill b-skill-is-wp">Wordpress</span>
		<span v-if="skillisHS" class="b-skill b-skill-is-hs">Hubspot</span>
		<span v-if="skillisPY" class="b-skill b-skill-is-py">Python</span>
		<span v-if="skillisPHP" class="b-skill b-skill-is-php">PHP</span>
  </div>
    <h5 class="text-is-left card-title">{{ cardtitle }}</h5>
    <h6 class="text-is-left card-sub-title">{{ cardsubtitle }}</h6>
    <p class="text-is-left card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary b-btn">Visit Site</a>
    <a href="#" class="btn btn-secondary b-btn">Read More</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'bcard',
  props: {
		imgsrc: String,
		cardtitle: String,
		cardsubtitle: String,
		cardcontent: String,
		skillisJS: Boolean,
		skillisVUE: Boolean,
		skillisWP: Boolean,
		skillisHS: Boolean,
		skillisPY: Boolean,
		skillisPHP: Boolean
	}
}
</script>
<style>
.b-grid-child__item {
	box-shadow:	0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);	
}
.b-grid-child__item:hover {
	transition: box-shadow .25s;
	box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.b-grid-child__item > img {
	object-fit: cover;
	position: relative;
	background-color: #fff;
	transition: box-shadow .25s;
	border-radius: 2px;
}
.card-skills {
	font-size: .9rem;
	display: inline-flex;
	border-radius: 3px;
	margin-right: 5px;
	margin-bottom: 15px;
}
.b-btn {
  padding: 5px; 
  margin: 10px;
}
.b-skill {
	margin-right: 3px;
	margin-bottom: 15px;
	background: transparent;
}
.card-skills span {
	border-radius: 5px;
	padding: 3px 5px;
}
.b-skill-is-vue {
	background: #4fc08d;
}
.b-skill-is-js {
	background: #EADD86;
}
.b-skill-is-wp {
	background: #00aadc;
}
.b-skill-is-hs {
	background: #ff7a59;
}
.b-skill-is-py {
	background: #2b5b84;
}
.b-skill-is-php {
	background: #8892BF; 
}

</style>
