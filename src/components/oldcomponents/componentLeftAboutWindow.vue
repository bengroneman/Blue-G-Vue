<template>
<!-- Left activatable button to reveal about me modal -->
<div>
<v-btn 
	@click="revealAboutModal" 
	id="reveal-about-btn" 
	left round absolute
	v-bind:class="changeBtnClass"
	>	
	<v-icon dark>fa-arrow-right</v-icon>
		<p id="btn-text"></p>
</v-btn>
	<!-- Introduce your self n stuff -->
	<aboutme v-if="isModalShown"></aboutme>
</div>
</template>

<script>
import aboutme from './componentTabAbout.vue'
import justlambda from './justlambda'

export default {
	name: 'leftaboutwindow',
	
	data () {
		return {
			isModalShown: false,
			modalIsActive: false
		}
	},

	// add ala methods
	methods: {
		revealAboutModal() {
			this.isModalShown = !this.isModalShown
			this.modalIsActive = !this.modalIsActive
		}
	},

	computed: {
		changeBtnClass() {
			if(this.modalIsActive) {
				return 'active-modal-class'
			} else {
				return 'inactive-modal-class'
			}
		}
	},

	// add components
	components: {
		aboutme,
		justlambda
	}
}
</script>

<style>
#reveal-about-btn {
	z-index: 101;
	position: fixed;
	left: -30px;
	margin-top: 25%;
	transition: 1s all ease;
}
#reveal-about-btn:hover {
	left: -10px;
	font-emphasis: 900;
}
.btn-text {
	text-align: center;
	font-emphasis: 700;
}
</style>

