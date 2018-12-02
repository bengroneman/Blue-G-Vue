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
          <div class="b-about-page__content content-right col-4">
            <div class="text-is-right about-category__row">

              <h4>Interests</h4>
              <ul class="content-right--ul">
                <li>Skateboard</li>
                <li>Programming</li>
                <li>League of Legends</li>
                <li>Reading</li>
              </ul>

              <h4>Skills</h4>
              <ul class="content-right--ul">
                <li>Javascript</li>
                <li>Design</li>
                <li>VueJS</li>
                <li>Mobile Web Specialist</li>
              </ul>

              <h4>Social</h4>
              <ul class="content-right--ul">
                <li><a href="https://www.linkedin.com/in/ben-groneman/" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/bengroneman" target="_blank">Github</a></li>
                <li><a href="mailto:bluegroneman10@gmail.com">bluegroneman10@gmail.com</a></li>
              </ul>

            </div>
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
  text-align: left;
}
.content-right {
  display: flex;
  padding: 10px;
  background-color: #1c252d;
}

.about-category__row {
  margin: auto 10px auto auto;

}
.about-category__row > h4 {
  color: #7BA3C6;
  text-transform: uppercase;
}

.content-right--ul {
  list-style: none;
  border-right: 2px solid rgba(84, 208, 186, 0.24);
  padding: 20px; 
}

</style>
