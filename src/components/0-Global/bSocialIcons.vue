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
    <a href="mailto:bluegroneman10@gmail.com">
      <button id="b-btn" href="mailto:bluegroneman10@gmail.com" type="button" class="btn">
        <i class="far fa-envelope" aria-hidden="true"></i>
      </button>
    </a>
  </div>
  <div class="column">
    <router-link to="contact">
      <button id="b-btn" href="contact" type="button" class="btn">
        <i class="fas fa-phone" aria-hidden="true"></i>
      </button>
    </router-link>
  </div>
</div>
</template>
<script>
import bbutton from '@/components/0-Global/bButton'

export default {
    name: 'b-social-icons',
    components: {
      bbutton
    }
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
