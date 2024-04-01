<script>
import { state } from '../state.js'
export default {
    name: 'Genres',
    data() {
        return {
            state,
        }
    },
    props: {
        TotalCard: Object
    }
}
</script>


<template>
    <li v-for="Genre, index in TotalCard.genres">
        Genere{{ index + 1 }}: {{ Genre }}</li>
</template>
<style></style>