<template>
  <section class="container-fluid b-project__section">
    <div class="row b-grid__row">
      <div class="col-8 b-grid child">

				<!-- grid item 1 -->
				<bcard
					imgsrc="/img/ruggedwerx.png"
					cardtitle="Ruggedwerx Project"
					cardsubtitle="Welding/Fabrication company"
					cardcontent="I built out the front end of this project under the regime of Wyoming inc"
					skillisWP
					skillisPHP
					skillisJS
				></bcard>
				<!-- grid item 2 -->
				<bcard
					imgsrc="/img/bonnevillebuilders.png"
					cardtitle="Bonneville Builders Project"
					cardsubtitle="Contactors of many sorts"
					cardcontent="This project was built for you!"
					skillisWP
					skillisPHP
					skillisJS
				></bcard>
				<!-- grid item 3 -->
				<bcard
					cardtitle="Museum of the American West Project"
					cardsubtitle="Museum based in Lander Wy"
					cardcontent="This project was built soley by yours truley"
					skillisWP
					skillisPHP
					skillisJS
				></bcard>
        <bcard
					cardtitle="Grow With Google Scholar"
					cardsubtitle="Browse through the code I wrote for this program"
					cardcontent="I was selected for the Grow With Google scholarship program through Udacity. With this in mind, I was able to tranform a non mobile friendly, unresponsive, website into a PWA, that will store restaurant data offline."
					skillisJS
          skillisCSS
				></bcard>
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
	margin: auto;
	padding: 50px;
  background-color: #151f29; 
}
.b-project-info__content {
  margin-top: 3em;
}
.b-grid__row {
  height: 100%;
}
.b-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 100px auto 100px auto;
}

</style>
