<template>
  <main class="b-blog" :class="{ 'blog--reading': this.post }">

    <bblogfeed :filters ="filters" />
    <bblogpost :post="post"/>

  </main>
</template>

<script>
import bblogfeed from '@/components/bBlogComponents/bBlogFeed' 
import bblogpost from '@/components/bBlogComponents/bBlogPost' 

export default {
  name: 'bblog',
  components: {
    bblogfeed,
    bblogpost
  },
  resources: 'Blog',
  props: {
    post: String,
    author: String
  },

  data: () => {
    return {
      navs: 0,
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels }
    },
    filters() {
      let filters = {}

      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },

  mounted() {
    this.$getResource('blog')
      .then(x => {
        // use pace hook to know when rendering is ready
      })
  }
}

</script>
