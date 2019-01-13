<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ hero_title }}
        </h1>
        <h2 class="subtitle">
          {{ hero_sub_title }}
        </h2>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'bsubpagehero',
  prop: {
    hero_title: String,
    hero_sub_title: String
  }
}
</script>
<style>

</style>
