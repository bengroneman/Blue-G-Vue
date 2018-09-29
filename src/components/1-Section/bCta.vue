<template>
<section class="vue-particles-bb">
  <div class="b-dark--overlay">
    <div class="b-cta__content">
      <div class="b-cta__content-wrapper">
        <h1>Benjamin Blue Groneman</h1>
        <h2>Web Developer</h2>
      </div>
    </div>

    <!-- Instantiate the particle system -->
    <vue-particles
      color="#54d0ba"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="false"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
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
    z-index: 2;
    background-size: cover;
    background-image: url('/img/b-cta__background.PNG');
}
.b-dark--overlay {
  z-index: 3;
  background: rgba(0, 0, 0, 0.75);
}

.b-cta__content {
   display: flex;
   position: relative;
   width: 100%;
   z-index: 5;
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

