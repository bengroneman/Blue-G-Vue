<template>
    <div class="b-featureimg__wrapper level">
        <img alt="bbg fly fishing" height="200" width="200" class="level-item" src="/img/BBG-Fly-Fising-WINDRIVER.JPG"> 
    </div>
</template>
<script>
export default {
    name: 'b-feature-img'
}
</script>
<style>
.b-featureimg__wrapper {
   background-color: #36454f;
   padding: 20px;
   border: 1px solid #708090;
   box-shadow: -6px 7px 0px 0px #708090;
   width: 100%;
   border-radius: 50%;
}
.b-featureimg__wrapper > img {
    border-radius: 50%;
}
</style>
