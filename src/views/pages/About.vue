<template>
  <section class="b-about-page__container">
    <div class="b-about-page__wrapper container">
      <div class="b-about-page__row row">
        <!-- START About me Content -->
          <div class="b-about-page__content col-8">
            <h1>User Centered Design, skateboarding, coffee, and a love for programming</h1>
            <p>You may be asking yourself, Ben Groneman? Who is that, well let me answer that for you, I am a developer who works primarily in the Javascript ecosystem. I carry a heavy focus on designing for the user, it becomes easy to get wrapped up in all the code, but this can lead to a complex mess, that may be fun to create and understand, but I find that this leaves a mess for the user to weed through.</p>
           
            <p>In the land of Javascript I began my journey within the Wordpress ecosystem, so naturally I began working with PHP, to develop shortcodes that could be leveraged by the popular Wordpress plugin known as VIsual Composer. From there I fostered a strong relationship with Javascript. Odd, right? Ha.</p> 
            
            <p>I have become quite fond of developing the front end of websites with VueJS. When it comes to the backend, I find myself reaching for Express JS right of the shelf. Both of these technologies provide a solid foundation for developing a fantastic development environment.</p>
          </div>
          <div class="b-bout-page__content col-4">
            <p>Lorem ipsum</p>
          </div>
        <!-- END About me Content -->
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'about'
}
</script>
<style>
.b-about-page__container {
  height: 100vh;
  width: 100%;
  background-color: #151f29;
  color: white;
  display: flex;
}
.b-about-page__wrapper {
  margin: auto;
}
.b-about-page__row {
  border: 1px solid white;
}
.b-about-page__content {
  padding: 45px;
}
</style>
