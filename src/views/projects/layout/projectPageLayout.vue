<template>
  <section class="project-ruggedwerx--container" aria-label="ruggedwerx project section">
    <div class="project-ruggedwerx--wrapper">
      <div class="project-image--wrapper">
        <img src="/img/ruggedwerx.png" alt="project alt" id="project-image" width="1024" />
      </div>
      <div class="project-content--wrapper">
        <!-- slot in the content -->
        <slot></slot>
      </div>
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
  background-color: #151f28;
}
.project-ruggedwerx--wrapper {
  margin: auto;
  background-color: white;
  border-radius: 5px;
  margin: 100px auto 100px auto;
  width: 1024px;
}
.project-content--wrapper {
  padding: 45px;
  text-align: left;
}
.project-image--wrapper {
  width: 1024px;
}
.project-image {
  height: 100%;
  width: 100%;
}
</style>
