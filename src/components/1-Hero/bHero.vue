<template>
  <section class="vue-particles-bb">
    <div class="b-dark--overlay">
      <div class="b-cta__content">
        <div class="b-cta__content-wrapper">
          <h1>Ben G.</h1>
          <h2>Software Engineer</h2>
          <bsocialicons></bsocialicons>
        </div>
      </div>

      <!-- Instantiate the particle system -->
      <vue-particles
        color="#a9a9a9"
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
import bsocialicons from '@/components/0-Global/bSocialIcons.vue';

export default {
    name: 'bhero',
    data: function () {
        return {
            main_header: String,
        }
    },
    components: {
        bsocialicons
    },
}
</script>
<style scoped>
.vue-particles-bb {
    height: 100%;
    width: 100%;
    z-index: 2;
    background-size: cover;
    background-image: url('/img/b_cta_background.PNG');
    background-color: black;
}
.b-dark--overlay {
    z-index: 3;
    background: rgba(41, 42, 45, .75);
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
	margin: 1.15em auto 0 auto;
}
</style>

