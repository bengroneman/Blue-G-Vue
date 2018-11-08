<template>
  <div id="app">
    <!-- B Global Toolbar -->
    <btoolbar></btoolbar>
    
    <router-view></router-view> 

    <!-- Blue G Footer-->
    <bfooter></bfooter>
    <!-- START B sidbar -->
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

