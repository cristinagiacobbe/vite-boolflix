<script>
import { state } from '../state.js'
import Vote from './Vote.vue'
import Overview from './Overview.vue'
import Flag from './Flag.vue'

export default {
    name: 'CardText',
    props: {
        TotalCard: Object
    },
    components: {
        Vote,
        Overview,
        Flag,
    },
    data() {
        return {
            state,
            urlPattern: "https://image.tmdb.org/t/p/w342/",
        }
    },

}
</script>
<template>

    <div class="card-cover">
        <img class="cover" :src="this.urlPattern + TotalCard.poster_path" alt="">
    </div>

    <div class="card-text">
        <ul>
            <li class="title"><strong>Titolo:</strong> {{ TotalCard.title ? TotalCard.title : TotalCard.original_name }}
            </li>
            <li> {{ TotalCard.original_title ? "Titolo originale: " + TotalCard.original_title : "" }} </li>
            <Vote :TotalCard="TotalCard.vote_average"></Vote>
            <Flag :TotalCard="TotalCard"></Flag>
            <Overview :TotalCard="TotalCard"></Overview>
            <br>
            <hr>
            <br>
            <strong>Cast:</strong>
            <li>{{ TotalCard.cast }}</li>
            <br>
            <hr>
            <br>
            <li v-for="Genre, index in TotalCard.genres">
                Genere{{ index + 1 }}: {{ Genre }}</li>
        </ul>

    </div>

</template>

<style scoped>
img {
    height: 480px;
    width: 100%;
}

.card-cover {
    position: absolute;
    top: 0;
    left: 0;
}

.card-text {
    display: none;
}

.card-text {
    color: white;
    border: 1px solid white;
    background-color: black;
    height: 480px;
    padding: 0.5rem;
    font-size: 12px;
}

.title {
    font-size: 20px;
    font-weight: bold;
}
</style>