<template>
    <v-container fluid>
        <div class="columns section-one">
            <div class="column is-2">
                <bnavcolumn></bnavcolumn>
            </div> 
            <div class="column is-6">
                <bcontentcolumn></bcontentcolumn>
            </div>
            <div class="column is-4">
                <bfeatureimg></bfeatureimg>
            </div>
        </div>
    </v-container>
</template>
<script>
import bnavcolumn from '@/components/2-Section/bNavColumn'
import bcontentcolumn from '@/components/2-Section/bContentColumn'
import bfeatureimg from '@/components/2-Section/bFeatureImg'

export default {
    name: 'binfosection',

    components: {
        bnavcolumn,
        bcontentcolumn,
        bfeatureimg
    }
}
</script>
