<script>
import { state } from '../state.js'
import Vote from './Vote.vue'
export default {
    name: 'CardText',
    props: {
        TotalCard: Object
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
        <li class="title">Titolo:{{ TotalCard.title ? TotalCard.title : TotalCard.original_name }}</li>
        <li> {{ TotalCard.original_title ? "Titolo: " + TotalCard.original_title : "" }} </li>
        <!-- <li>Voto: {{ MovieCard.vote_average }}</li> -->

        <Vote :TotalCard="TotalCard.vote_average"></Vote>

        <li><img :src="TotalCard.flag" :alt="TotalCard.original_language"></li>
        <li>Content: {{ TotalCard.overview }}</li>
    </div>
</template>

<style>
.card-text {
    min-height: 500px;
    color: white;
    border: 1px solid white;
    background-color: black;
    padding: 1rem;
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
</style>