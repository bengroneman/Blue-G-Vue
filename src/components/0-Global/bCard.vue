<template>
<div class="card b-grid-child__item lifted-card-feel">
  <img v-if="imgsrc" class="card-img-top" :src="imgsrc" :alt="imgsrc"/>
  <div class="card-body">
      <div class="card-skills">
        <span v-if="skillisJS" class="b-skill b-skill-is-js">Javascript</span>
        <span v-if="skillisVUE" class="b-skill b-skill-is-vue">VueJS</span>
        <span v-if="skillisWP" class="b-skill b-skill-is-wp">Wordpress</span>
        <span v-if="skillisHS" class="b-skill b-skill-is-hs">Hubspot</span>
        <span v-if="skillisPY" class="b-skill b-skill-is-py">Python</span>
        <span v-if="skillisPHP" class="b-skill b-skill-is-php">PHP</span>
        <span v-if="skillisCSS" class="b-skill b-skill-is-css">CSS</span>
        <span v-if="skillisCS" class="b-skill b-skill-is-cs">C#</span>
        <span v-if="skillisPM" class="b-skill b-skill-is-pm">PM</span>
      </div>

      <h5 class="text-is-left card-title">{{ cardtitle }}</h5>
      <h6 class="text-is-left card-sub-title"><em>{{ cardsubtitle }}</em></h6>
      <p class="text-is-left card-text">{{ cardcontent }}</p>

    <div class="card-footer card-20">
      <span id="b-btn" class="card-footer-item site-url--wrapper">
        <a v-if="siteURL" :href="siteURL" target="_blank" class="btn btn-primary b-btn">See More</a>
      </span>
      <router-link
        v-if="readMoreLink"
        :to="readMoreLink"
        class="button is-light read-more--btn card-footer-item"
        >
        Read More
      </router-link>
    </div>
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
    skillisCSS: Boolean,
		skillisVUE: Boolean,
		skillisWP: Boolean,
		skillisHS: Boolean,
		skillisPY: Boolean,
    skillisPHP: Boolean,
    skillisCS: Boolean,
    skillisPM: Boolean,
    readMoreLink: String,
    siteURL: String
	}
}
</script>
<style>
.b-grid-child__item > img {
  object-fit: cover;
  position: relative;
  background-color: #fff;
  transition: box-shadow .25s;
  border-radius: 2px;
}
.card {
  height: auto;
}
.card-body {
  padding: 25px;
  height: 100%;
}
.card-text {
  margin: 15px auto 25px auto;
}
.card-skills {
  font-size: .9rem;
  display: inline-flex;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 15px;
}

.site-url--wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.b-btn {
  margin: auto auto 0 auto;
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
  color: #cee7f1;
}
.b-skill-is-php {
  background: #8892BF; 
}
.b-skill-is-css {
  background: #264de4;
  color: #cee7f1;
}
.b-skill-is-cs {
  background: #223068;
  color: #cee7f1;
}
.b-skill-is-pm {
  background: #b92905;
  color: white;
}

.read-more--btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
