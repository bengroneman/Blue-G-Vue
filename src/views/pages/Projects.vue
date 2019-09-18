<template>
  <section class="container-fluid b-project__section">
      <bskillsection></bskillsection>
  </section>
</template>

<script>
import bcard from '@/components/0-Global/bCard.vue';
import bline from '@/components/0-Global/bLine.vue';
import bskillsection from '@/components/3-Section/bSkillSection.vue';

export default {
    name: 'projects',
    components: {
        bcard,
        bline,
        bskillsection,
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
