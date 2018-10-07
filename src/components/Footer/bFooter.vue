<template>
<div class="b-footer">
  <div class="b__footer white--text text-xs-center">
    <h1>CONNECT WITH ME</h1>
    <div class="social-icons__footer">
      <bsocialicons></bsocialicons>
    </div>

    <div class="bbg-copyright">
      &copy;2018 — <em>Blue G Development</em>
    </div>
  </div>
</div>
</template>

<script>
import bsocialicons from '@/components/2-Section/bSocialIcons'

export default {
  name: 'bfooter',
  components: {
    bsocialicons
  }
}
</script>
<style>
.b__footer {
  background-color: rgb(1, 6, 15)!important;
  width: 100%;
  padding-top: 45px;
}
</style>
