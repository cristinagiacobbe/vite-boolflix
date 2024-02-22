<script>
import axios from 'axios';
import { state } from '../state.js'

export default {
    name: 'AppMain',
    data() {
        return {
            state,
            urlPattern: "https://image.tmdb.org/t/p/w342/"
        };
    },

}

</script>


<template>
    <input name="searchMovie" type="text" v-model="state.searchMovie" placeholder="Inserisci il titolo di un film"
        @keypress.enter="state.filterResults">
    <div class="container">
        <div class="row">
            <div class="col" v-for="MovieCard in state.MovieCards">
                <div class="card">
                    <ul>
                        <li class="title">Titolo: <span class="text">{{ MovieCard.title }}</span></li>
                        <li>Titolo originale: {{ MovieCard.original_title }}</li>
                        <li>Voto: {{ MovieCard.vote_average }}</li>
                        <div class="vote">
                            <li v-for="vote in MovieCard.vote_average">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            </li>
                            <li v-for="vote in (5 - MovieCard.vote_average)">
                                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                            </li>
                        </div>

                        <li><img :src="MovieCard.flag" :alt="MovieCard.original_language"></li>
                        <li><img :src="this.urlPattern + MovieCard.poster_path" alt=""></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
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