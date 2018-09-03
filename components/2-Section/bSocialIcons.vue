<template>
<v-container fluid>
  <v-layout justify-space-around class="mb-2">
    <span class="group pa-2">
      <div class="btn__wrapper">
        <section class="portfolio-experiment">
          <bbutton externalLink="https://github.com/strangenectar" btnIcon="fingerprint" btnText="github"></bbutton> 
          <bbutton externalLink="https://www.linkedin.com/in/ben-groneman-62174370/" btnIcon="link" btnText="linkedin"></bbutton>
          <bbutton externalLink="mailto:bluegroneman10@gmail.com" btnIcon="mail" btnText="email me"></bbutton>
        </section>
      </div>
    </span>
  </v-layout>
</v-container>
</template>
<script>
import bbutton from '@/components/0-Global/bButton'

export default {
    name: 'b-social-icons',
    components: {
      bbutton
    }
}
</script>
<style>
.btn__wrapper {
  width: 100%;
  height: 5em;
  margin: 25px;
}
#b__btn {
  margin: 10px;
}
</style>
