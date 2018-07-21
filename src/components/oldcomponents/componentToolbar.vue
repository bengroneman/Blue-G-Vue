<template>
		<v-toolbar color="transparent" flat>
		<v-toolbar-title><h3>Blue G</h3></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down toolbar-items">
			<v-btn flat><p>skills</p></v-btn>
			<v-btn flat><p>projects</p></v-btn>
			<v-btn flat><p>contact</p></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import socialicons from './componentSocialIcons'

export default {
  name: 'toolbar',
  data () {
    return {
      github: 'Github',
      linkedin: 'Linkedin',
      email: 'Email Me',
      isShowing: false,
      social: 'social'
    }
  },
  methods: {
    showSocialIcons() {
       this.isShowing = !this.isShowing 
    },
    socialNullify() {
        if(isShowing) {
           this.social = ''; 
        } else {
            console.log(social);
        } 
    }
  },
  components: {
    socialicons
  }
}
</script>

<style scoped>
h3, p {
	color: white;
}
h3 {
text-transform: uppercase;
}
.toolbar-items > p:hover {
	border-top: 2px dashed white;
}
.toolbar__content {
    background: rgba(0, 0, 0, 0.15)!important;
}
.btn__content > p {
	font-size: 2em;
	letter-spacing: 0.15em;
}
.btn__content {
	margin-right: 10px;
	margin-top: 10px;
}
.btn {
	transition: 0.5s all ease;
}
.btn:hover {
	border-top: 2px dashed white;
	border-bottom: 2px dashed white;
}
.toolbar__title {
    border: 3px solid #57617c;
    padding: 10px;
    transition: all 0.7s ease-in-out;
	margin-left: 10px;
}
.toolbar__title  {
	font-size: 1.5em;
	letter-spacing: 0.15em;
	font-emphasis: 900;
}

.toolbar__title:hover {
    border-radius: 50%;
}
/** social icons transition**/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.toolbar {
	position: fixed;
	z-index: 100;
	padding: 15px;
}
</style>

