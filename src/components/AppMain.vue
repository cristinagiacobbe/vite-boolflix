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
    
}
</script>


<template>
<InitialPopularList></InitialPopularList>  
<MovieList></MovieList>
</template>


<style>

</style>