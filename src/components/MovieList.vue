<script>
import { state } from '../state.js'
import Vote from './Vote.vue'

export default {
    name: 'MovieList',
    components: {
        Vote,
    },
    data() {
        return {
            state,
            urlPattern: "https://image.tmdb.org/t/p/w342/",
        }
    }
}


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="MovieCard in state.MovieCards">
                <div class="card">
                    <ul>
                        <li class="title">Titolo: <span class="text">{{ MovieCard.title }}</span></li>
                        <li>Titolo originale: {{ MovieCard.original_title }}</li>
                        <li>Voto: {{ MovieCard.vote_average }}</li>

                        <Vote :MovieCard="MovieCard.vote_average"></Vote>


                        <li><img :src="MovieCard.flag" :alt="MovieCard.original_language"></li>
                        <li><img :src="this.urlPattern + MovieCard.poster_path" alt=""></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>