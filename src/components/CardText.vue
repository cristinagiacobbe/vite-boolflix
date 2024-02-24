<script>
import { state } from '../state.js'
import Vote from './Vote.vue'
export default {
    name: 'CardText',
    props: {
        MovieCard: Object
    },
    components: {
        Vote,
    },
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <div class="card-text">
        <li class="title">Titolo:{{ MovieCard.title ? MovieCard.title : MovieCard.original_name }}</li>
        <li> {{ MovieCard.original_title ? "Titolo: " + MovieCard.original_title : "" }} </li>
        <li>Voto: {{ MovieCard.vote_average }}</li>

        <Vote :MovieCard="MovieCard.vote_average"></Vote>

        <li><img :src="MovieCard.flag" :alt="MovieCard.original_language"></li>
        <li>Content: {{ MovieCard.overview }}</li>
    </div>
</template>
<style></style>