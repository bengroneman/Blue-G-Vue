<template>
  <div id="app">
    <!-- START B global toolbar -->
    <btoolbar></btoolbar>
    <!-- END B Global Toolbar -->
    <!-- START B dynamic window content -->
    <transition name="page-slide" mode="out-in">
      <router-view></router-view> 
    </transition>
    <!-- END B dynamic window content -->

    <!-- START B footer-->
    <bfooter></bfooter>
    <!-- END B footer-->
  </div>
</template>
<script>
import btoolbar from '@/components/0-Global/bToolbar'
import bfooter from '@/components/Footer/bFooter'

export default {
  components: {
    btoolbar,
    bfooter
  }
}
</script>
<style lang="css">
@import '../node_modules/bulma/css/bulma.css';

.page-slide-enter-active {
	animation: moveFromBottom .7s ease both;
}
.page-slide-leave-active {
	animation: moveToBottom .7s ease both;
}
/* START Animations */
@keyframes moveToBottom {
	from { }
	to { -webkit-transform: translateY(100%); transform: translateY(100%); }
}

@keyframes moveFromBottom {
	from { -webkit-transform: translateY(100%); transform: translateY(100%); }
}
/* END Animations */
</style>

