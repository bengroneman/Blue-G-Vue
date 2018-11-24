<template>
  <section class="project-ruggedwerx--container" aria-label="ruggedwerx project section">
    <div class="project-ruggedwerx--wrapper">
      <!-- slot in the content -->
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'projectpagelayout'
}
</script>
<style>
.project-ruggedwerx--container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: black;
}
.project-ruggedwerx--wrapper {
  margin: auto;
  background-color: white;
  border-radius: 5px;
}
</style>
