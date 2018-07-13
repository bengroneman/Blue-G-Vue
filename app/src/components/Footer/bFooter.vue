<template>
<v-footer
  dark
  height="auto"
  class="b-footer"
>
  <v-card
    flat
    tile
    class="indigo lighten-1 white--text text-xs-center"
  >
  <v-card-text>
  <v-btn
    v-for="icon in icons"
    :key="icon"
    class="mx-3 white--text"
    icon
    >
    <v-icon size="24px">{{ icon }}</v-icon>
    </v-btn>
    </v-card-text>
    
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
        </div>
    </div>

    <v-divider></v-divider>

    <v-card-text class="white--text">
    &copy;2018 — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</v-footer>
</template>

<script>
export default {
  name: 'bfooter'
}
</script>
<style>
.b-footer {
  margin-top: 70px;
}
</style>
