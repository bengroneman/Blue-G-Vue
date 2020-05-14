  <template>
<section id="psectionrojects" class="container is-fluid b-skill__container clip-side-margin">
  <!-- Section Header-->
  <h1 class="text-is-center">Projects</h1>
  <h3 class="text-is-center">See my work</h3>

  <!-- Skill Icon Column -->
  <div class="b-skill-icon__column is-skill--grid">
    
    <!-- START B Skll -->
    <bcard 
      cardtitle="Mythix"
      cardsubtitle="A mythical game with loveable characters (WIP)"
      skillisCS
      skillisPM
      siteURL="https://github.com/bengroneman/mythix"
      cardcontent="A game that is in active development. The end product will be a mythical platformer with loveable characters, and engaging combat"
    ></bcard>
    <bcard 
      cardtitle="NOLS | Step Forward"
      cardsubtitle="NOLS Development Campagin Website"
      skillisJS
      skillisHS
      skillisCSS
      siteURL="https://info.nols.edu/step-forward"
      cardcontent="A website built to represent NOLS campaign goals, and status"
    ></bcard>
    <bcard 
      cardtitle="NOLS | Request a Brochure"
      cardsubtitle="NOLS Request a brochrue page redesign"
      skillisJS
      skillisHS
      skillisCSS
      siteURL="https://info.nols.edu/request-a-brochure"
      cardcontent="A large UX driven page redsign focused on deliver a quality end product for the end user"
    ></bcard>
    <bcard 
      cardtitle="NOLS | Semester and Year Courses"
      cardsubtitle="A landing page meant to delight and inform prospective semester students"
      skillisJS
      skillisHS
      skillisCSS
      siteURL="https://info.nols.edu/request-a-brochure"
      cardcontent="A custom built page built to engage the user, and leverage Hubl tags to delight interal users of this page"
    ></bcard>
    <bcard 
      cardtitle="Ruggedwerx"
      cardsubtitle="Welding/fabrication company"
      skillisJS
      skillisCSS
      skillisWP
      skillisPHP
      cardcontent="A project built during my time as a front-end Developer for Wyoming Inc., built on Wordpress with CSS, JavaScript with jQuery, and custom PHP plugins." 
      siteURL="https://ruggedwerx.com"
      class="lifted-card-feel"
    ></bcard>
    <bcard 
      cardtitle="Bonneville Builders"
      cardsubtitle="Lander Wyoming, custom contracting"
      skillisCSS
      skillisJS
      skillisWP
      skillisPHP
      siteURL="https://buildbonneville.com"
      cardcontent="A Wordpress website built with custom PHP plugins, and Wyoming Inc.'s custom PHP framework. The front-end was crafted with jQuery, vanilla JS, and CSS, based on high-fidelity mockups."
    ></bcard>
    <bcard 
      cardtitle="Github Repositories"
      cardsubtitle="My Code"
      skillisJS
      skillisHS
      skillisVUE
      skillisPY
      skillisCS
      siteURL="https://github.com/bengroneman/"
      cardcontent="Browse through open source code that I have written, during my time as a software engineer"
    ></bcard>
    <!-- END B Skills -->
  </div>

  <div class="b-skill__content">
    <div>
      <h5>When solving problems I take a human-focused approach, and carry an empathy for the end user.</h5>
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
