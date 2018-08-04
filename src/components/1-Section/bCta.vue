<template>
<v-jumbotron color="primary" dark class="b-jumbotron">
  <v-container fill-height>
    <v-layout align-center>
      <v-flex text-xs-center>
<!-- COOOODDEE -->
<pre><code class="display-2 text-xs-left">
<span id="jumbotron-content__wrapper">
<span class="b-tan">function</span> <span class="b-blue-ish">displayInitialGreeting</span> (<span class="b-blue-ish">name</span>) {
  <span class="b-tan">document</span>.<span class="b-purple">write</span>(<span class="b-green-ish">'Shallom, '</span> + <span class="b-purple">name</span>);
  <span class="b-tan">document</span>.<span class="b-purple">write</span>(<span class="b-green-ish">'Benjamin Blue Groneman'</span>);
}
</span>
</code></pre>
      </v-flex>
    </v-layout>
  </v-container>
</v-jumbotron>
</template>
<script>
import bfeatureimg from '@/components/0-Global/bFeatureImg'

export default {
  name: 'b-cta',
  components: {
    bfeatureimg
  }
}
</script>
<style scoped>
#jumbotron-content__wrapper {
   font-family: 'Quattrocento', sans-serif;
   font-weight: 100;
   letter-spacing: 0.025em;
   font-size: 0.85em;

}
.primary {
  background-color: #195a92;
}
.b-jumbotron {
  height: 100vh!important;
  background: black;
  font-size: 0.85em;
}
.b-tan {
  color: #ddca7e!important;
}
.b-blue-ish {
  color: #809bbd!important; 
}
.b-purple {
  color: #9a8297!important;
}
.b-green-ish {
 color: #96b38a!important; 
}
</style>
