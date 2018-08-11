<template>
    <div class="b-featureimg__wrapper">
        <img alt="bbg fly fishing" height="150" width="150" src="img/BBG-Fly-Fising-WINDRIVER.JPG">
    </div>
</template>
<script>
export default {
    name: 'bfeatureimg'
}
</script>
<style>
.b-featureimg__wrapper {
   background-color: #36454f;
   padding: 5px;
   border: 1px solid #708090;
   box-shadow: -4px 5px 0px 0px #708090;
   position: absolute;
   bottom: 0;
   left: 45px;
   border-radius: 10%;
}
.b-featureimg__wrapper > img {
    border-radius: 10%;
}
</style>
