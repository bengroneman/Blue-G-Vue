<template>
  <div id="app">
    <!-- B Global Toolbar -->
    <btoolbar></btoolbar>
    
    <router-view></router-view> 

    <!-- Blue G Footer-->
    <bfooter></bfooter>
    <!-- B Tree -->
  </div>
</template>
<script>
import btoolbar from '@/components/0-Global/bToolbar'
import bfooter from '@/components/Footer/bFooter'
import blogo from '@/components/0-Global/bLogo'

export default {
    components: {
        btoolbar,
        bfooter,
        blogo
    }
}
</script>

