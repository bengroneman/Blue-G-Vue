<template>
  <div class="b-svg__wrapper">
    <!-- Instantiate the logo -->
    <img src="img/SVG/BBG-Logo-Rev-2.png" alt="ben g logo" />
  </div>
</template>
<script>
export default {
  name: 'blogo'
}
</script>

<style>
.b-svg__wrapper {
  display: flex;
  margin: auto;
  height: 75px;
  width: fit-content;
}
.b-svg__wrapper > img {
  object-fit: contain;
}
</style>

