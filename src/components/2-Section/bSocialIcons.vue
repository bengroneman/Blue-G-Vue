<template>
<div class="container-fluid">
  <div class="col">
    <button id="b-btn" href="https://github.com/strangenectar" type="button" class="btn btn-outline-primary">My Github</button>

    <button id="b-btn" href="https://www.linkedin.com/in/ben-groneman-62174370/" type="button" class="btn btn-outline-primary">My Linkedin</button>

    <button id="b-btn" href="mailto:bluegroneman10@gmail.com" type="button" class="btn btn-outline-primary">Email Me</button>

    <button id="b-btn" href="contact" type="button" class="btn btn-outline-primary">Contact Me</button>
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
}
</style>
