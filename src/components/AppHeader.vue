<script>
import { state } from '../state.js'
import SearchMovie from './SearchMovie.vue'

export default {
    name: 'AppHeader',
    components: {
        SearchMovie,
    },
    data() {
        return {
            state
        }
    },

}

</script>
<template>
    <div class="logo">

    </div>
    <SearchMovie @search="state.filterResults()"></SearchMovie>
</template>

<style scoped></style>