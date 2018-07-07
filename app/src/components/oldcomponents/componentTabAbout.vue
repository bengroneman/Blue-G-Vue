<template>
<!-- Tab Component // About Me -->
<v-container fluid>
	<v-layout>
		<v-flex>
			<div id="terminal-div">
				<div class="terminal-header">
					<ul class="shell-dots">
						<li class="dot red"></li>
						<li class="dot yellow"></li>
						<li class="dot green"></li>
					</ul>
				</div>
				<!-- Here is where we lay out the content-->
				<div class="terminal-content">
					<h1>HELLO WORLd</h1>
					<ul>
						<li v-for="line in terminalLines">
							<justlambda></justlambda>{{line}}
						</li>
					</ul>
				</div>
			</div>	
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
import socialtab from './componentTabSocial'
import justlambda from './justlambda'

export default {
  name: 'abouttab',
  components: {
    socialtab,
	justlambda
  },
  data () {
    return {
	  	terminalLines: ['hello there', 'mynameis ben'],
      	show: false
    }
  }
  
}
</script>

<style scoped>
.container {
	padding: 0!important;
}
#terminal-div {
	position: fixed;
	left: 0;
	width: 25%;
	background-color: black;
	z-index: 100;
	height: 600px;
	width: 400;
	margin-top: 10.5%;
	transition: 0.75s all ease;
	color: white;
}
.dot {
	margin: 5px;
	display: inline-block;
	width: 7px;
	height: 7px;
	border-radius: 6px;
}
.red {
	background-color: rgb(200, 48, 48);
}
.yellow {
	background-color: rgb(247, 219, 96);
}
.green {
	background-color: rgb(46, 201, 113);
}
</style>

