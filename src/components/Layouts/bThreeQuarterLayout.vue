<template>
  <section class="b-contact-master--wrap container">
    <div class="columns">

      <div class="column is-three-quarters">
        <slot name="left-column"></slot>
      </div>

      <div class="column is-one-quarter">
        <slot name="right-column"></slot>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'bthreequarterlayout'
}
</script>

<style>

</style>
