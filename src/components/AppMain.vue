<script>
import axios from 'axios';
import { state } from '../state.js'

export default {
    name: 'AppMain',
    data() {
        return {
            state,
            MovieCards: [],
            searchMovie: [],
        };
    },
    methods: {
        filterResults() {
            const filteredUrl = `https://api.themoviedb.org/3/search/movie?api_key=8d990f04e5e690857302762e75a6986a&query=%2A${this.searchMovie}`
            console.log(filteredUrl);

            axios
                .get(filteredUrl)
                .then((response) => {
                    console.log(response.data.results);
                    this.MovieCards = response.data.results
                    console.log(this.MovieCards);

                })
                .catch(error => {
                    console.error(error);
                })
        },
    },


}
</script>
<template>
    <input name="searchMovie" type="text" v-model="searchMovie" placeholder="Inserisci il titolo di un film"
        @keypress.enter="filterResults">
    <div class="container">
        <div class="row">
            <div class="col" v-for="MovieCard in MovieCards">
                <div class="card">
                    <ul>
                        <li>{{ MovieCard.title }}</li>
                        <li> {{ MovieCard.original_title }}</li>
                        <li> {{ MovieCard.original_language }}</li>
                        <li> {{ MovieCard.vote_average }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>