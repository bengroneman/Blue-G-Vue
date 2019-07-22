<template>
<section id="open-source" class="b-project-section">
  <div class="b-project__wrapper parent b-darkish--overlay">
    <!-- Open Source Advocate Section  -->
    <div class="b-project-content__wrapper child">
      <h2>I am passionate about open source</h2>
      <h3>Peruse my github</h3>
      <a href="https://github.com/bengroneman/" target="_blank">
        <button id="b-btn" class="b-project-btn" type="button">
          <i class="fas fa-code"></i>
        </button>
      </a>
    </div>
  </div>
</section>
</template>

<script>
// Should implement some data for reactivity
// If we could have an imgsrc attribute for this, and then multiple slots
// Then we could reuse this component in the future for more and more projects
export default {
    name: 'bproject'
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
  width: 25%;
}
.see-my-work:hover {
  text-decoration: underline; 
}
.b-project__wrapper {
  display: flex;
}
.b-project-content__wrapper {
  max-height: 550px;
  max-width: 550px;
  border: 5px solid white;
  margin: auto;
  text-align: center;
  z-index: 3;
  padding: 25px;
}
.b-brand-black {
  background-color: #01060f;
}
.b-project-section {
  height: 100%;
  color: white;
}
.b-darkish--overlay::before {
  content:"";
  display: block;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .8);
}

.b-project__wrapper {
  background: linear-gradient(217deg, rgba(84,208,186,.8), rgba(68,168,197,0) 70.71%),
              linear-gradient(127deg, rgba(16,90,146,.8), rgba(32,47,62,0) 70.71%),
              linear-gradient(336deg, rgba(1,6,15,.8), rgba(0,0,0,0) 70.71%);
  /*background: url("/img/hexels/open_source_background.PNG");*/
  position: relative;
  z-index: 1;
  height: 750px;
  width: 100%;
}
</style>
