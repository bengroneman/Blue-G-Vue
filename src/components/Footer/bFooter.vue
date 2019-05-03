<template>
<div class="b-footer">
  <div class="b__footer white--text text-xs-center">
    <div class="social-icons__footer">
      <bsocialicons></bsocialicons>
    </div>
    <div class="bbg-copyright">
      &copy;2018 — <em>Author: Ben G. made with <i class="fas fa-heart"></i> from <a href="https://vuejs.org" target="_blank">Vue</a></em>
    </div>
  </div>
</div>
</template>

<script>
import bsocialicons from '@/components/0-Global/bSocialIcons'

export default {
  name: 'bfooter',
  components: {
    bsocialicons
  }
}
</script>
<style>
.b__footer {
  background-color: rgb(167, 242, 233)!important;
  width: 100%;
  padding-top: 45px;
}
.social-icons__footer {
  max-width: 600px;
  margin: auto;
}
</style>
