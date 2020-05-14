<template>
<div class="b-footer">
  <div class="b__footer text-xs-center">
    <div class="bbg-copyright">
      <h5 class="color-is--grey">© 2020 | Ben Groneman | <a href="https://github.com/bengroneman/Blue-G-Vue/blob/master/LICENSE.txt" target="_blank" alt="link to GNU v3 license">GNU General Public License v3.0</a></h5>
      <h5 class="color-is--grey">Powered by <a href="https://vuejs.org/" target="_blank" alt="Vuejs website">Vue</a> | Made with ❤  by <a href="https://github.com/bengroneman/" target="_blank" alt="github profile link">bengroneman</a></h5>
    </div>
  </div>
</div>
</template>

<script>
import bsocialicons from '@/components/0-Global/bSocialIcons'
// TODO: make the copyright year dynamic and automagically change each year
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
