<template>
  <div class="quote-blurb fluid__container">
    <slick
      ref="slick"
      :options="slickOptions"
    >
      <bmarqueeslider class="marquee">
        <template slot="quote">
          "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins." 
        </template>
        <template slot="attributed_to">
          &mdash; Ellen Ullman
        </template>
      </bmarqueeslider>

      <bmarqueeslider class="marquee">
        <template slot="quote">
          "What one programmer can do in one month, two programmers can do in two months."
        </template>
        <template slot="attributed_to">
          &mdash; Fredrick Brooks
        </template>
      </bmarqueeslider>

      <bmarqueeslider class="marquee">
        <template slot="quote">
          "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie
        </template>
        <template slot="attributed_to">
          &mdash; Patrick McKenzie
        </template>
      </bmarqueeslider>

      <bmarqueeslider class="marquee">
        <template slot="quote">
          "Rules of Optimization:
          Rule 1: Don't do it.
          Rule 2 (for experts only): Don't do it yet. ”
        </template>
        <template slot="attributed_to">
          &mdash; Michael A. Jackson
        </template>
     </bmarqueeslider>
    </slick>
  </div>
</template>
<script>
import bmarqueeslider from '@/components/0-Global/reusable/bMarqueeSlider';
import Slick from 'vue-slick';

export default {
  name: 'quoteblurb',
  components: {
    Slick,
    bmarqueeslider,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
				infinite: true,
				speed: 1000,
				slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: false,
        prevArrow: false,
        fade: true,
				useCSS: true,
			}
		}
  }
}
</script>
<style>
.quot-blurb > .slick-current .slick-active {
	animation: slidein 1.5s;
}
</style>
