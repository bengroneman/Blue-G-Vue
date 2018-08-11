<template>
<section class="container-fluid b-jumbotron__wrapper">
    <div class="row b-jumbotron text-center align-items-center">
<!-- COOOODDEE -->
<pre><code class="display-2 text-left">
<span id="jumbotron-content__wrapper">
<span class="b-tan">function</span> <span class="b-blue-ish">displayInitialGreeting</span> (<span class="b-blue-ish">name</span>) {
  <span class="b-tan">document</span>.<span class="b-purple">write</span>(<span class="b-green-ish">'Shallom, '</span> + <span class="b-purple">name</span>);
  <span class="b-tan">document</span>.<span class="b-purple">write</span>(<span class="b-green-ish">'Benjamin Blue Groneman'</span>);
}
</span>
</code></pre>        
    </div>
    <!-- CTA Button -->
    </section>
</template>
<script>
import bfeatureimg from '@/components/0-Global/bFeatureImg'
import bbutton from '@/components/0-Global/bButton'

export default {
  name: 'b-cta',
  components: {
    bfeatureimg,
    bbutton
  }
}
</script>
<style scoped>
.b-jumbotron__wrapper {
    height: 100%;
}
.b-jumbotron {
  background: black;
}
.b-jumbotron pre, code {
    background-color: black!important;
}
.b-jumbotron code {
    margin-top: 2em;
}
.b-jumbotron pre { 
    height: 100%;
    width: 100%;
    overflow: hidden;
    border: none;
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
