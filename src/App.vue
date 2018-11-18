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
<style>
.page-slide-enter-active {
  animation: bounceIn 0.3s;
}
.page-slide-leave-active {
  animation: bounceIn 0.3s reverse;
}

@keyframes slideIn {
  from {
    transform: scaleX(0);
    transform: scaleY(0);
  }
  to {
    transform: scaleY(100%);
    transform: scaleX(100%);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>

