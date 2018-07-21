<template>
<div class="imgcontainer overlay">
	<div id="main-header-image-container">	
    	<img id="main-header-image" src="/img/BenG-Portfolio.JPG"></img>
    </div>
	<div class="bg-header">
        <bgimgheader></bgimgheader>
        <!--<abouttab></abouttab>-->
    </div>
</div>
</template>

<script>
import bgimgheader from './componentImgHeader'
import abouttab from './componentTabAbout'
  export default {
    name: 'imgcontainer',

    components: {
        bgimgheader,
        abouttab
    }
  }
</script>

<style scoped>
.imgcontainer {
    position: relative;
    z-index: 3;
}
#main-header-image-container {
	height: auto;
	overflow: hidden!important;
}
.overlay {
	background-color: rgba(0, 0, 0, 0.75)!important;
}
.overlay:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right,#101E45,#000);
    opacity: .80; 
  }

.imgcontainer > img {
    background-size: cover;
}
.bg-header {
    position: absolute;
    top: 150px;
    display: inline;    
    z-index: 5;
    margin: auto;
    font-size: 5em;
    justify-content: center;
    color: white;
    text-align: center;
}
#main-header-image {
    height: 100%;
    overflow: hidden;
}
</style>
