<template>
<div class="columns btn__container">
  <div class="column">
    <a href="https://github.com/bengroneman" target="_bank">
      <button id="b-btn" type="button" class="btn">
        <i class="fab fa-github" aria-hidden="true"></i>
      </button>
    </a>
  </div>
  <div class="column">
    <a href="https://linkedin.com/in/ben-groneman" target="_blank">
      <button id="b-btn" href="https://www.linkedin.com/in/ben-groneman-62174370/" type="button" class="btn">
        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
      </button>
    </a>
  </div>
  <div class="column">
    <a href="mailto:info@bengroneman.tech">
      <button id="b-btn" href="mailto:bluegroneman10@gmail.com" type="button" class="btn">
        <i class="far fa-envelope" aria-hidden="true"></i>
      </button>
    </a>
  </div>
</div>
</template>
<script>

export default {
    name: 'b-social-icons'
}
</script>
<style>
.btn__container {
  width: 100%;
  display: flex;
}
.btn__wrapper {
  width: 300px;
  height: auto;
  margin: 25px;
}
#b__btn {
  margin: 10px;
  width: 45px;
}
.is-icon--grid {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
