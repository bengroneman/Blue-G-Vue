<template>
  <div id="app">
    <!-- START B global toolbar -->
    <btoolbar></btoolbar>
    <!-- END B Global Toolbar -->
   
    <!-- START B dynamic window content -->
    <router-view></router-view> 
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

