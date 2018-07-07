<template>
	<div class="timeline-card-container">
		<slot>SomeContent</slot>
	</div>
</template>
<script>
	export default {
		name: 'b-timeline-card'
	}
</script>
<style>
.timeline-card-container {
	display: flex;
	justify-content: center;
	margin-top: 15%;
	height: 500px;
	background-color: white;
	border: 1px solid rgba(25, 25, 25, 0.75);
	position: relative;
}

</style>