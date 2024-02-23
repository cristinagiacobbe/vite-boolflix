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


<style>
.row {
    display: flex;
    flex-wrap: wrap;
}

.col {
    width: calc(100% / 12 * 3);
}

img {
    max-width: 100%;
}

li {
    list-style: none;
}

.title {
    font-weight: bold;
    font-size: 20px;
}

.text {
    font-weight: lighter;
}

.vote {
    display: flex;
}
</style>