<template>
<section class="vue-particles-bb">

    <div class="b-cta__content">
        <div class="b-cta__content-wrapper">
            <h1>Benjamin Blue Groneman</h1>
            <h2>Web Developer</h2>
        </div>
    </div>

    <!-- Instantiate the particle system -->
    <vue-particles
			color="#dedede"
			:particleOpacity="0.7"
			:particlesNumber="80"
			shapeType="circle"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.4"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push"
        ></vue-particles>
</section>
</template>
<script>
import bfeatureimg from '@/components/0-Global/bFeatureImg'
import bbutton from '@/components/0-Global/bButton'

export default {
  name: 'b-cta',
  components: {
    bfeatureimg,
    bbutton
  }
}
</script>
<style scoped>
.vue-particles-bb {
    height: 100vh;
    width: 100vw;
    background: url('/public/img/BenG-Portfolio.JPG');
	background-image: linear-gradient(rgb(0, 0, 0), rgb(32, 47, 62));
}

.b-cta__content {
   display: flex;
   position: relative;
   width: 100%;
}

.b-cta__content-wrapper {
    margin: 15% auto;
    position: absolute;
    width: 100%;
}
.b-cta__content-wrapper > h2 {
	color: #54d0ba;
}

.b-cta__content-wrapper > h1 {
	color: white;
	margin: 1.15em auto;
}
</style>

