  <template>
<section class="container-fluid b-skill__container">
  <!-- Section Header-->
  <h1 class="text-is-center">Skill Array</h1>
  <h3 class="text-is-center">What I bring to the table</h3>

  <div class="row">
    <!-- Skill Icon Column -->
    <div class="col b-skill-icon__column is-skill--grid">
      
      <!-- START B Skll -->
      <bcard 
        cardtitle="Ruggedwerx"
        cardsubtitle="Welding/Fabrication Company"
        skillisJS
        skillisWP
        skillisPHP
        cardcontent="A project built during my time at Wyoming Inc (Lander). I was responsible for building out the front end of this website on the wordpress platform."
        readMoreLink="/projects"
      ></bcard>

      <bcard 
        cardtitle="Museum of the American West"
        cardsubtitle="Lander WY Museum"
        skillisJS
        skillisWP
        skillisPHP
        readMoreLink="/projects"
        cardcontent="A project built by yours truly. This project was a Wordpress redesign of a local Lander museums website."
      ></bcard>

      <bcard 
        cardtitle="Github Repositories"
        cardsubtitle="Code"
        skillisJS
        skillisVUE
        skillisPY
        readMoreLink="https://github.com/strangenectar/"
        cardcontent="Browse through open source code that I have written, during my time as an avid developer."
      ></bcard>

      <!-- END B Skills -->
    </div>

    <div class="b-skill__content">
      <div>
        <h5>Programming and problem solving is my passion, if you would like to learn more feel free to contact me!</h5>
        <router-link to="contact"></router-link>
        <button id="b-btn" href="/contact" type="button" class="btn btn-outline-primary">Contact me</button>
      </div>
    </div>
  </div>
</section>

</template>
<script>
import bbutton from '@/components/0-Global/bButton'
import bcard from '@/components/0-Global/bCard'

export default {
	name: 'bskillsection',
  components: {
    bbutton,
    bcard
  }
  }
</script>
<style>
.b-skill__container {
    height: 100%;
    background-color: #ccc;
}
.b-skill__container > h1 {
  padding: 45px;
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
  margin: 45px;
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
