<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">Page Not Found</h1>
        <h1 v-else>An error occured</h1>
        <nuxt-link to="/">Home Page</nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'default'
}
</script>
