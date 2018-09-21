<template>
<section class="container-fluid b-skill__container">
    <div class="row">
        <!-- Skill Icon Column -->
        <h1>Skill Icon Array</h1>
        <div class="col-sm b-skill-icon__column b-skill-icon__grid">
                        
        </div>
        <!-- Skill Description Column -->
        <h1>Skill</h1> 
        <div class="col-sm b-skill-icon__column b-skill-description__column">
                <p>{{ getIconList }}</p>
        </div>
    </div>
</section>
</template>
<script>
export default {
	name: 'bskillsection',
    data: () => ({
        iconList: [] 
    }),

    computed: {
        getIcons: function() {
            return iconList;
        }
    },
  
    methods: {
        putIconsInArray() {
            this.iconList = iconList.push(
                'Java',
                'Python',
                'VueJs')
        }
    },
    
    mounted: {
        putIconsInArray()
    }
}
</script>
<style scoped>
.b-skill__container {
    height: 100vh;
}
.b-skill-icon__column {
    margin: auto;
}
.b-skill-icon__grid {
    display: grid;
    grid-template-columns: repeat(3, 50px);
}
.b-skill-item {
    
}
</style>
