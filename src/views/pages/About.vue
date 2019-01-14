<template>
  <section class="b-about-page__container container">
    <div class="columns">
      <!-- START About me Content -->
      <div class="b-about-page__content column is-three-quarters">
        <aside class="content--wrapper"> 
          <h1>User Centered Design, skateboarding, coffee, and a love for programming</h1>
          <p>I am an avid developer with a background in Java, PHP, and mathematics. I have an Associates Degree in Computer Science, and an odd fascination with the Linux kernel. I have moved from the PHP, and Java world to the wonderful world of JavaScript. With a soft spot for Functional programming, and clean code, you can find me typing away on a variety of side projects, in coffee shops, and on the go.</p>
          <br/>
          <p>I began working on the web, back in 2015. I was an intern at Wyoming Inc., a marketing/web development company focused on building user friendly, and responsive websites for business around Wyoming. Shortly after my internship with Wyoming Inc., I graduated from Central Wyoming College. I promptly began a Web Internship with the National Outdoor Leadership School, a school focused on teaching a tolerance for adversity and uncertainty, and leadership in the outdoors. I am currently working on the NOLS web team as the Digital Campaign Coordinator. I work primarily in the Hubspot COS.</p> 
          <br/>
          <p>When I am not working in the NOLS Creative Dept. you can find me tinkering with new and old technologies, or out on the road with my bike. I also love to skateboard, snowboard, and push myself to learn new things everyday.</p>
        </aside>
      </div>

      <div class="b-about-page__content content-right is-one-quarter">
        <div class="text-is-right about-category__row">

          <ul class="content-right--ul">
            <li><h5>Interests</h5></li>
            <li>Skateboarding</li>
            <li>Programming</li>
            <li>League of Legends / Rocket League</li>
            <li>Learning</li>
            <li>Backpacking</li>
            <li>Biking</li>
          </ul>

          <ul class="content-right--ul">
            <li><h5>Skills</h5></li>
            <li>JavaScript</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Linux</li>
            <li>Mobile Web Specialist</li>
          </ul>

          <ul class="content-right--ul">
            <li><h5>Social</h5></li>
            <li><a href="https://www.linkedin.com/in/ben-groneman/" target="_blank">Linkedin</a></li>
            <li><a href="https://github.com/bengroneman" target="_blank">Github</a></li>
            <li><a href="mailto:bluegroneman10@gmail.com">bluegroneman10@gmail.com</a></li>
          </ul>

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
  height: 100%;
  width: 100%;
  background-color: #151f29;
  color: white;
  display: flex;
  margin: 75px auto 75px auto;
}
.b-about-page__container .columns {
  padding: 45px;
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
.content-right--ul li > h5 {
  color: #7BA3C6;
  text-transform: uppercase;
  margin: 5px auto 5px auto;
}

.content-right--ul {
  list-style: none;
  border-right: 2px solid rgba(84, 208, 186, 0.24);
  padding: 20px; 
}

</style>
