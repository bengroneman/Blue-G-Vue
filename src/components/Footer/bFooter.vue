<template>
<v-footer
  dark
  height="auto"
  class="b-footer"
  id="footer"
>
  <v-card
    flat
    tile
    class="b__footer white--text text-xs-center"
  >
  <v-card-text class="display-2">
    CONNECT WITH ME
  </v-card-text>
  <div class="social-icons__footer">
      <bsocialicons></bsocialicons>
  </div>
    
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <bcontactform></bcontactform>  
        </div>
    </div>

    <v-divider></v-divider>

    <v-card-text class="white--text">
    &copy;2018 — <em>Blue G Dev</em>
    </v-card-text>
  </v-card>
</v-footer>
</template>

<script>
import bsocialicons from '@/components/2-Section/bSocialIcons'
import bcontactform from '@/components/Footer/bContactForm.vue'

export default {
  name: 'bfooter',
  components: {
    bsocialicons,
    bcontactform
  }
}
</script>
<style>
.b__footer {
  background-color: rgb(1, 6, 15)!important;
  width: 100%;
  padding-top: 45px;
}
</style>
