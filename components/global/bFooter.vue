<template>
<div class="b-footer">
  <div class="b__footer white--text text-xs-center">
    <h1>CONNECT WITH ME</h1>
    <div class="social-icons__footer">
      <bsocialicons></bsocialicons>
    </div>

    <div class="bbg-copyright">
      &copy;2018 — <em>Blue G Development</em>
      <blogo></blogo>
    </div>
  </div>
</div>
</template>

<script>
import bsocialicons from '~/components/ui/bSocialIcons.vue'
import blogo from '~/components/global/bLogo.vue'

export default {
  name: 'bfooter',
  components: {
    bsocialicons,
    blogo
  }
}
</script>
<style>
.b__footer {
  background-color: rgb(167, 242, 233)!important;
  width: 100%;
  padding-top: 45px;
}
</style>
