<script>
import { state } from '../state.js'
import MovieList from './MovieList.vue'

export default {
    name: 'AppMain',
    components: {
        MovieList,
    },
    data() {
        return {
            state,

        };
    },
}

</script>


<template>
    <MovieList></MovieList>
</template>


<style></style>