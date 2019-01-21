<template>
  <section class="hero is-info b-sub-page--hero is-bold is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ hero_title }}
        </h1>
        <h2 class="subtitle">
          {{ hero_sub_title }}
        </h2>
        <div class="slotted-content--wrapper">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'bsubpagehero',
  props: {
    hero_title: String,
    hero_sub_title: String
  }
}
</script>
<style>
.b-sub-page--hero {
  margin-top: 50px;
}
.slotted-content--wrapper {
  margin: 35px auto;
}
.slotted-content--wrapper > a {
  margin: 10xp;
}

</style>
