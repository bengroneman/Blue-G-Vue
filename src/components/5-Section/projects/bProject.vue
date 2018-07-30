<template>
<div class="b-project columns">
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="projectImgUrl" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'bproject',
  props: ['projectImgUrl']
}
</script>

