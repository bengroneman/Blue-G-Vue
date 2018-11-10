<template>
  <transition name="b-modal">
    <div class="b-modal--overlay">
      <div class="modal--container">
        <div class="modal--wrapper">

          <!-- START Here ala modal -->
          <div class="modal--header">
            <slot name="header">
              Default Header
            </slot>
          </div>

          <div class="modal--body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal--footer">
            <slot name="footer">
              Default footer
              <button class="modal-default--btn" @click="$emit('close')">
                ok
              </button>
            </slot>
          </div>
          <!-- END Here ala modal -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bmodal'
}
</script>
<style>

</style>
