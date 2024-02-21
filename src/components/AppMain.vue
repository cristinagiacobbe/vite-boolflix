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
            Flags: [
                {
                    State: "en",
                    ImgFlag: "https://flagcdn.com/32x24/gb.png"
                },
                {
                    State: "it",
                    ImgFlag: "https://flagcdn.com/32x24/it.png"
                },
                {
                    State: "fr",
                    ImgFlag: "https://flagcdn.com/32x24/fr.png"
                },
                {
                    State: "de",
                    ImgFlag: "https://flagcdn.com/32x24/de.png"
                },
                {
                    State: "ja",
                    ImgFlag: "https://flagcdn.com/32x24/jp.png"
                },
                {
                    State: "fi",
                    ImgFlag: "https://flagcdn.com/32x24/fi.png"
                },
                {
                    State: "no",
                    ImgFlag: "https://icons8.it/icon/iUYNm0kbGahw/norway"
                },
                {
                    State: "ro",
                    ImgFlag: "https://flagcdn.com/32x24/ro.png"
                }
            ],
            urlPattern: "https://image.tmdb.org/t/p/w342/"
        };
    },
    methods: {
        filterResults() {
            const filteredUrl = `https://api.themoviedb.org/3/search/movie?api_key=8d990f04e5e690857302762e75a6986a&language=it_IT&query=%2A${this.searchMovie}`
            //console.log(filteredUrl);

            axios
                .get(filteredUrl)
                .then((response) => {
                    /* console.log(response.data.results); */
                    this.MovieCards = response.data.results
                    console.log(this.MovieCards);
                    this.filterFlag()
                })
                .catch(error => {
                    console.error(error);
                })
        },
        filterFlag() {
            this.MovieCards.forEach((MovieCard) => {
                this.Flags.forEach((Flag) => {
                    if (Flag.State === MovieCard.original_language) {
                        return MovieCard.flag = Flag.ImgFlag
                    }
                })
                //console.log(this.MovieCards);
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
                        <li class="title">Titolo: <span class="text">{{ MovieCard.title }}</span></li>
                        <li>Titolo originale: {{ MovieCard.original_title }}</li>
                        <li>Voto: {{ MovieCard.vote_average }}</li>
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
</style>