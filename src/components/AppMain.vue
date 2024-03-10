<script>
import { state } from '../state.js'
import MovieList from './MovieList.vue'
import InitialPopularList from './InitialPopularList.vue'

export default {
    name: 'AppMain',
    components: {
        MovieList,
        InitialPopularList,
    },
    data() {
        return {
            state,           
        };
    },
    
    computed: {
        getFound() {
            return state.TotalCards.length === 0 && state.popularCards.length === 0 ? 'No results found':''
        }
    },
}
</script>


<template>
<InitialPopularList></InitialPopularList>  
<MovieList></MovieList>
</template>


<style>

</style>