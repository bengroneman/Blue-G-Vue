<template>
    <div class="columns">
        <div class="column section-one is-three-fifths is-offset-one-fifth">
            <div class="columns">
                <div class="column is-2">
                    <bnavcolumn></bnavcolumn>
                </div>
                <div class="column">
                    <bcontentcolumn></bcontentcolumn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bnavcolumn from '@/components/2-Section/bNavColumn'
import bcontentcolumn from '@/components/2-Section/bContentColumn'

export default {
    name: 'binfosection',

    components: {
        bnavcolumn,
        bcontentcolumn
    }
}
</script>
