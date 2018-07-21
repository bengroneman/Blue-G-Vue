<template>
  <div class="home">
    <bprojectsection></bprojectsection>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bprojectsection from '@/components/4-Section/bProjectSection.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    bprojectsection
  }
}
</script>
