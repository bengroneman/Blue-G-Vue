<template>
  <div class="columns">
    <div class="column section-one is-8 is-offset-2">
      <div class="columns">
        <div class="column child is-6">
          <bcontentcolumn></bcontentcolumn>
        </div>
        <!-- Icon Column -->
        <div class="column child is-6 info-icon__section">
          <v-icon>code</v-icon>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import bnavcolumn from '@/components/2-Section/bNavColumn'
import bcontentcolumn from '@/components/2-Section/bContentColumn'

export default {
    name: 'binfosection',

    components: {
        bnavcolumn,
        bcontentcolumn
    }
}
</script>
<style>
.info-icon__section > i {
  font-size: 25em;
  color: #54d0ba;
}
</style>
