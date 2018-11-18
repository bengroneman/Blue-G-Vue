<template>
<div class="container-fluid">
  <div class="col is-icon--grid">
    <button id="b-btn" href="https://github.com/strangenectar" type="button" class="btn">
      <i class="fab fa-github" aria-hidden="true"></i>
    </button>
    <button id="b-btn" href="https://www.linkedin.com/in/ben-groneman-62174370/" type="button" class="btn">
      <i class="fab fa-linkedin-in" aria-hidden="true"></i>
    </button>
    <button id="b-btn" href="mailto:bluegroneman10@gmail.com" type="button" class="btn">
      <i class="far fa-envelope" aria-hidden="true"></i>
    </button>
    <button id="b-btn" href="contact" type="button" class="btn">
      <i class="fas fa-phone" aria-hidden="true"></i>
    </button>
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
.btn__wrapper {
  width: 100%;
  height: 5em;
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
