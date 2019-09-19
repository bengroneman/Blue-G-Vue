<template>
  <section class="container-fluid b-project__section">
      <bskillsection></bskillsection>
      <!--<quoteblurb></quoteblurb>-->
  </section>
</template>

<script>
import bcard from '@/components/0-Global/bCard.vue';
import bline from '@/components/0-Global/bLine.vue';
import bskillsection from '@/components/3-Section/bSkillSection.vue';
import quoteblurb from '@/components/2-Section/bQuoteBlurb.vue';

export default {
    name: 'projects',
    components: {
        bcard,
        bline,
        bskillsection,
        quoteblurb,
    },
}
</script>

<style>
.b-project__section {
	height: 100%;
	margin: auto;
	padding: 50px;
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
