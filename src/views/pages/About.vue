<template>
  <section class="b-about-page__container container">
    <bintrosection></bintrosection>
  </section>
</template>
<script>
import bintrosection from '@/components/2-Section/bIntroSection.vue';

export default {
    name: 'about',
    components: {
        bintrosection
    },
}
</script>
<style>
.b-about-page__container {
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  margin: 75px auto 75px auto;
}
.b-about-page__container .columns {
  padding: 45px;
}
.b-about-page__content {
  padding: 45px;
  text-align: left;
}
.b-about-page__content .content--wrapper > h2 {
  font-weight: bold;
  margin: auto auto 45px auto;
  color: #7BA3C6; 
}
.content-right {
  display: flex;
  padding: 10px;
  background-color: #1c252d;
}

.about-category__row {
  margin: auto 10px auto auto;

}
.content-right--ul li > h5 {
  color: #7BA3C6;
  text-transform: uppercase;
  margin: 5px auto 5px auto;
}

.content-right--ul {
  list-style: none;
  border-right: 2px solid rgba(84, 208, 186, 0.24);
  padding: 20px; 
}

</style>
