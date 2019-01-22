<template>
  <div class="card--wrapper">
    <div class="tabs is-centered is-boxed is-medium">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bformcard',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.card--wrapper {
  width: 100%;
  background-color: black;
}
</style>
