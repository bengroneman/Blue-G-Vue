<template>
  <section class="container-fluid b-project__section">
    <div class="row b-grid__row">
      <div class="col-6 b-grid child">

        <!-- grid item 1 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Blue G Portfolio Project"
					cardsubtitle="A portfolio for Ben Groneman"
					cardcontent="This project was built by Ben Groneman, with VueJS"
					skillisVUE
					skillisJS
				></bcard>
				<!-- grid item 2 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Ruggedwerx Project"
					cardsubtitle="Welding/Fabrication company"
					cardcontent="I built out the front end of this project under the regime of Wyoming inc"
					skillisWP
					skillisPHP
					skillisJS
				></bcard>
				<!-- grid item 3 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Bonneville Builders Project"
					cardsubtitle="Contactors of many sorts"
					cardcontent="This project was built for you!"
					skillisWP
					skillisPHP
					skillisJS

				></bcard>
				<!-- grid item 4 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Museum of the American West Project"
					cardsubtitle="Museum based in Lander Wy"
					cardcontent="This project was built soley by yours truley"
					skillisWP
					skillisPHP
					skillisJS
				></bcard>
      </div>
      <div class="col-6 b-project__info child">
        <h1 class="text-is-left">Project Description </h1>
        <bline></bline>
        <div class="text-is-left b-project-info__content">
          <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p> 
          <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bcard from '@/components/0-Global/bCard'
import bline from '@/components/0-Global/bLine'

export default {
  name: 'projects',
	components: {
		bcard,
    bline
	}
}
</script>

<style>
.b-project__section {
	height: 100%;
	margin: 50px;
	padding: 50px;
}
.b-project-info__content {
  margin-top: 3em;
  font-family: 'Nunito', serif;
}
.b-grid__row {
  height: 100%;
}
.b-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

</style>
