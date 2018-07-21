<template>
<v-layout row>
  <v-flex xs12 sm12>
      <v-card-title primary-title>
        <div>
          <div class="headline">Contact Me</div>
            <span class="grey--text">Shoot me an email in regards to your next project</span>
          </div>
      </v-card-title>
      <v-slide-y-transition>
        <v-card-text>
          <div class="text-xs-center">
            <a href="http://twitter.com">
              <v-btn color="primary" dark>Twitter
                <v-icon dark right>fa-twitter</v-icon>
              </v-btn>
            </a>

            <a href="http://github.com">
              <v-btn color="black" dark>Github
                <v-icon dark right>fa-github</v-icon>
              </v-btn>
            </a>

            <a href="mailto:bluegroneman10@gmail.com">
              <v-btn color="green" dark>Email Me
                <v-icon dark right>fa-envelope-open-o</v-icon>
              </v-btn>
            </a>

            <a href="https://codepen.io">
              <v-btn color="cyan" dark>Codepen
                <v-icon dark right>fa-codepen</v-icon>
              </v-btn>
            </a>                  
          </div>
        </v-card-text>
      </v-slide-y-transition>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'socialtab',
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
.social-card {
    border: none!important;
}
</style>
