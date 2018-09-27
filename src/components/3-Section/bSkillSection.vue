<template>
<section class="container-fluid b-skill__container">
    <div class="row">
        <!-- Skill Icon Column -->
        <h1>Skill Icon Array</h1>
        <div class="col-sm b-skill-icon__column b-skill-icon__grid">
          <div class="skill-grid-item">
            <p>Test</p>
          </div>              

          <div class="skill-grid-item">
            <p>Test</p>
          </div>              

          <div class="skill-grid-item">
            <p>Test</p>
          </div>              

          <div class="skill-grid-item">
            <p>Test</p>
          </div>              

          <div class="skill-grid-item">
            <p>Test</p>
          </div>              

          <div class="skill-grid-item">
            <p>Test</p>
          </div>              
        </div>

        <!-- Skill Description Column -->
        <h1>Skill</h1> 
        <div class="col-sm b-skill-icon__column b-skill-description__column">

        </div>
    </div>
</section>
</template>
<script>

export default {
	name: 'bskillsection'
}
</script>
<style scoped>
.b-skill__container {
    height: 100vh;
    background-color: #ccc;
}
.b-skill-icon__column {
    margin: auto;
}
.b-skill-icon__grid {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
}
.b-skill-item {
    
}
</style>
