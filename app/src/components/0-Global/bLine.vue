<template>
  <div class="b-line__wrapper">
    <span class="b-line"></span>
  </div>
</template>
<script>
  export default {
    name: 'bline'
  }
</script>
<style scoped>
.b-line__wrapper {
  width: 200px;
  height: 2px;
  background: #bfbfbf;
  margin-top: 50px;
}
.b-line {
  background-color: gainsboro;
  width: 100%;
  height: 100%;
}
</style>
