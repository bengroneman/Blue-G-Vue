<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-centered">

        <slot name="card-header-title"></slot>

      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i @click="revealForm()" class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">

        <slot name="content"></slot>

        <br>
      </div>
    </div>
    <div class="card-footer">
      <a @click="revealForm()" class="card-footer-item"></a>
    </div>
    <aside v-if="is_form_visible">
      <!-- Default Slot -->

      <slot></slot>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'bformcard',
  data () {
    return {
      is_form_visible: false
    }
  },
  methods: {
    revealForm: function() {
      if (!this.is_form_visible) {
        this.is_form_visible = true
      } else {
        this.is_form_visible = false
      }
    }
  }
}
</script>

<style scoped>

</style>
