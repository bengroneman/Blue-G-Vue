  <template>
<section id="skill-section" class="container is-fluid b-skill__container clip-side-margin">
  <!-- Section Header-->
  <h1 class="text-is-center">Skill Array</h1>
  <h3 class="text-is-center">Projects I've worked on</h3>

  <!-- Skill Icon Column -->
  <div class="b-skill-icon__column is-skill--grid">
    
    <!-- START B Skll -->
    <bcard 
      cardtitle="Ruggedwerx"
      cardsubtitle="Welding/Fabrication Company"
      skillisJS
      skillisWP
      skillisPHP
      cardcontent="A project built during my time as a Font-End Developer with Wyoming Inc., Built with a custom Wordpress Theme, for a welding/fabrication company based in Kinnear Wyoming."
      readMoreLink="/projects/ruggedwerx"
      class="lifted-card-feel"
    ></bcard>

    <bcard 
      cardtitle="Museum of the American West"
      cardsubtitle="Lander WY - Pioneer Museum"
      skillisJS
      skillisWP
      skillisPHP
      readMoreLink="/projects/maw"
      cardcontent="A project built by yours truly. This project was a redesign; built with a custom Wordpress theme, for the Museum of the American West."
    ></bcard>

    <bcard 
      cardtitle="Github Repositories"
      cardsubtitle="My Code"
      skillisJS
      skillisVUE
      skillisPY
      readMoreLink="https://github.com/bengroneman/"
      cardcontent="Browse through open source code that I have written, during my time as an avid developer."
    ></bcard>
    <bcard 
      cardtitle="Topline General Store"
      cardsubtitle="Lander Wyoming - General Store"
      skillisJS
      skillisVUE
      skillisPY
      readMoreLink="/projects/topline"
      cardcontent="A small SPA for a local General Store. This website is built with VueJS and, leverages a Python API for the contact form."
    ></bcard>

    <!-- END B Skills -->
  </div>

  <div class="b-skill__content">
    <div>
      <h5>Human-focused development, and problem solving are my passion; if you are looking to learn more, feel free to contact me!</h5>
      <router-link to="/contact">
        <button id="b-btn" type="button" class="btn btn-outline-primary">Contact</button>
      </router-link>
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
    background-color: #ccc;
}
.b-skill__container > h1 {
  padding-top: 45px;
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
