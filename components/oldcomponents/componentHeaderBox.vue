<template>
<v-container fluid fill-height>
<v-layout row wrap>
    <v-flex xs12 md12 lg12>
        <v-card light color="primary">
	      <imgcontainer></imgcontainer>
        </v-card>
    </v-flex>
</v-layout>
</v-container>
</template>
<script>
import imgcontainer from './componentImgContainer'

export default {
    name: 'headerbox',
    components: {
    	imgcontainer
    }
}
</script>
<style scoped>
.container {
	margin: 0!important;
	padding: 0!important;
}
</style>
