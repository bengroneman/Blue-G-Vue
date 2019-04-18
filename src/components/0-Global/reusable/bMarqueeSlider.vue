<template>
  <section class="marquee-slider--wrapper">
    <div class="is-slider--content">
      <h2 class="text-xs-center">
        <em>
          <slot name="quote"></slot>
        </em>
      </h2>
      <p class="text-cs-center">
        <slot name="attributed_to"></slot>
      </p>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'bmarqueeslider',
  }
</script>
<style>
.marquee-slider--wrapper {
  height: 100%;
  width: 100%;
}
.is-slider--content {
  margin: 5% auto;
  width: 75%;
}
@media screen and (max-width: 768px) and (min-width: 300px) {
  .is-slider--content {
    margin: 5% 10px auto 10px;
    width: 100%;
  }
}
</style>
