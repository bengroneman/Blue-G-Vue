<template>
<div class="container-fluid">
  <div class="col">
    <!-- animation starts here -->
    <section class="portfolio-experiment">
      <bbutton externalLink="https://github.com/strangenectar" btnIcon="fingerprint" btnText="github"></bbutton> 
      <bbutton externalLink="https://www.linkedin.com/in/ben-groneman-62174370/" btnIcon="link" btnText="linkedin"></bbutton>
      <bbutton externalLink="mailto:bluegroneman10@gmail.com" btnIcon="mail" btnText="email me"></bbutton>
    </section>
    <!-- animation ends here -->
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
