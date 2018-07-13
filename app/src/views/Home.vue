<template>
  <div class="home">
    <img src="../assets/logo.png">
    <bprojectinfo></bprojectinfo>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bprojectinfo from '@/components/4-Section/bProjectInfo.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    bprojectinfo
  }
}
</script>
