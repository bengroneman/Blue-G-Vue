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
					skillisVUE=true
					skillisJS=true
				></bcard>
				<!-- grid item 2 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Ruggedwerx Project"
					cardsubtitle="Welding/Fabrication company"
					cardcontent="I built out the front end of this project under the regime of Wyoming inc"
					skillisWP=true
					skillisPHP=true
					skillisJS=true
				></bcard>
				<!-- grid item 3 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Bonneville Builders Project"
					cardsubtitle="Contactors of many sorts"
					cardcontent="This project was built for you!"
					skillisWP=true
					skillisPHP=true
					skillisJS=true

				></bcard>
				<!-- grid item 4 -->
				<bcard
					imgsrc="https://bulma.io/images/placeholders/640x320.png"
					cardtitle="Museum of the American West Project"
					cardsubtitle="Museum based in Lander Wy"
					cardcontent="This project was built soley by yours truley"
					skillisWP=true
					skillisPHP=true
					skillisJS=true
				></bcard>
      </div>
      <div class="col-6 b-project__info child">
        <h1>h3llo </h1>
      </div>
    </div>
  </section>
</template>

<script>
import bcard from '@/components/0-Global/bCard'

export default {
  name: 'projects',
	components: {
		bcard
	}
}
</script>

<style>
.b-project__section {
	height: 100%;
	margin: 50px;
	padding: 50px;
}
.b-grid__row {
  height: 100%;
}
.b-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

</style>
