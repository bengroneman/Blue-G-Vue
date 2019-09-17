<template>
<div class="b-footer">
  <div class="b__footer text-xs-center">
    <div class="bbg-copyright">
      <h5 class="color-is--grey">© 2019 | Ben Groneman | CC BY-NC 4.0</h5>
      <h5 class="color-is--grey">Powered by Vue | Made with ❤ by <a href="https://github.com/bengroneman/" target="_blank" alt="github profile link">bengroneman</a></h5>
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
    background: linear-gradient(#1f1f21, #252627);
    width: 100%;
    padding-top: 45px;
}
.social-icons__footer {
    max-width: 600px;
    margin: auto;
}
</style>
