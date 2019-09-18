  <template>
<section id="psectionrojects" class="container is-fluid b-skill__container clip-side-margin">
  <!-- Section Header-->
  <h1 class="text-is-center">Projects</h1>
  <h3 class="text-is-center">See my work</h3>

  <!-- Skill Icon Column -->
  <div class="b-skill-icon__column is-skill--grid">
    
    <!-- START B Skll -->
    <bcard 
      cardtitle="Ruggedwerx"
      cardsubtitle="Welding/fabrication company"
      skillisJS
      skillisWP
      skillisPHP
      cardcontent="A project built during my time as a front-end Developer for Wyoming Inc., built on Wordpress with CSS, JavaScript with jQuery, and custom PHP plugins." 
      siteURL="https://ruggedwerx.com"
      class="lifted-card-feel"
    ></bcard>
    <bcard 
      cardtitle="Museum of the American West"
      cardsubtitle="Lander WY - non-profit historical museum"
      skillisJS
      skillisWP
      skillisPHP
      siteURL="https://museumoftheamericanwest.com"
      cardcontent="A volunteer website redesign for a local non-profit museum. This website was built with CSS, and vanilla JavaScript. This project involved a focus on the end User Experience"
    ></bcard>

    <bcard 
      cardtitle="Github Repositories"
      cardsubtitle="My Code"
      skillisJS
      skillisVUE
      skillisPY
      siteURL="https://github.com/bengroneman/"
      cardcontent="Browse through open source code that I have written, during my time as an independent software engineer"
    ></bcard>
    <bcard 
      cardtitle="Bonneville Builders"
      cardsubtitle="Lander Wyoming, custom contracting"
      skillisJS
      skillisWP
      skillisPHP
      siteURL="https://buildbonneville.com"
      cardcontent="A Wordpress website built with custom PHP plugins, and Wyoming Inc.'s custom PHP framework. The front-end was crafted with jQuery, vanilla JS, and CSS, based on high-fidelity mockups."
    ></bcard>

    <!-- END B Skills -->
  </div>

  <div class="b-skill__content">
    <div>
      <h5>Human-focused development, and problem solving are my passion; if you are looking to learn more, feel free to contact me!</h5>
    </div>
  </div>
</section>

</template>
<script>
import bcard from '@/components/0-Global/bCard'

export default {
    name: 'bskillsection',
    components: {
        bcard
    },
}
</script>
<style>
.b-skill__container {
    height: 100%;
}
.b-skill__container > h1 {
    padding-top: 45px;
    color: white;
}
.b-skill__container h3 {
    color: white;
}
.is-skill--grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
}
.b-skill-icon__column {
    margin: auto;
    padding-top: 45px;
    padding-bottom: 45px;
    max-width: 1024px;
}
.b-skill-icon__column > p {
    margin-bottom: 10px;
}
.b-skill-icon__column h1 {
    text-transform: uppercase;
    margin-bottom: 45px;
}
.b-skill__item {
    width: 100%;
    height: 30px;
    background-color: rgba(84,208,186,.8);
}
.b-skill__item > p {
    margin: 2px auto 2px 20px;
}
.b-skill__content {
    margin: 10px;
    width: 100%;
    display: flex;
}
.b-skill__content h5 {
    color: white;
}
.b-skill__content > div {
    margin: auto;
    max-width: 768px;
}
.hover-text {
    display: none;
}
.b-skill__item:hover .hover-text {
    display: inline; 
}

.b-skill__content h5 {
    margin: 45px auto;
}

</style>
