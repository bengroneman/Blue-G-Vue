<template>
<div class="b-btn__container">
  <a v-if="isExternalLink" id="b-btn--a" :href="linkTo">
    <span class="text"><i class="fas {!! btnIcon !!}"></i>{{btnText}}</span>
  </a>
  <router-link v-else to="linkTo"></router-link>
</div>
</template>
<script>
// TODO: Validate our props -> this is a best practice
export default {
  name: 'bbutton',
  data: () => {
    return {
      isExternalLink: Boolean    
    }
  },
  props: {
    btnIcon: String,
    btnText: String,
    linkTo: {
      validator: function (link) {
        var expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);

        if (link.match(regex)) {
          this.isExternalLink = true;  						
        } else {
          this.isExternalLink = false;
        }
      }
    }
  }
}
</script>
<style>
.b-btn__container {
	height: 75px;
	max-width: 150px;
	margin: auto;
	background: transparent;
	border: 2px solid beige;
	display: flex;
}


#b-btn--a:hover {
	box-shadow: inset 4000px 0 0 0 #202f3e;
  color: white;
}
#b-btn--a {
	margin: auto;
	color: #202f3e;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.035em;
	overflow: hidden;
	display: flex;
	height: 100%;
	width: 100%;
	transition: all ease-in-out 1.4s;
  transition: color ease 0.2s;
  box-shadow: inset 0 0 0 0 black;
}
#b-btn--a span {
	margin: auto;
}

</style>
