<template>
<section class="b-project-section">
  <div class="b-project__wrapper parent">
    <!-- Open Source Advocate Section  -->
    <div class="b-project-content__wrapper child">
      <h2>I love open source</h2>
      <h3>Browse my github</h3>
      <a href="https://github.com/strangenectar/" target="_blank">
        <button id="b-btn" class="b-project-btn" type="button">
          <i class="fas fa-laptop-code"></i>
        </button>
      </a>
    </div>
  </div>
</section>
</template>

<script>
import bbutton from '@/components/0-Global/bButton'
// Should implement some data for reactivity
// If we could have an imgsrc attribute for this, and then multiple slots
// Then we could reuse this component in the future for more and more projects
export default {
    name: 'bproject',

    components: {
      bbutton
    }
}
</script>

<style>
.see-my-work {
  color: white;
}
#b-btn {
  border: none;
  font-weight: 600;
  letter-spacing: 0.025em;
  border-radius: 5px;
}
.b-project-btn {
  width: 50%;
}
.see-my-work:hover {
  text-decoration: underline; 
}
.b-project-content__wrapper {
  max-height: 550px;
  max-width: 550px;
  border: 5px solid white;
  margin: 65px auto 65px auto;
  text-align: center;
  padding: 25px;
}
.b-brand-black {
  background-color: #01060f;
}
.b-project-section {
  height: fit-content;
  color: white;
}
.b-project__wrapper {
  background: linear-gradient(217deg, rgba(84,208,186,.8), rgba(68,168,197,0) 70.71%),
              linear-gradient(127deg, rgba(16,90,146,.8), rgba(32,47,62,0) 70.71%),
              linear-gradient(336deg, rgba(1,6,15,.8), rgba(0,0,0,0) 70.71%);
  height: 100%;
  width: 100%;

}
</style>
