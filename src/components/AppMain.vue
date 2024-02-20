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
                    ImgFlag: "https://icons8.it/icon/ShNNs7i8tXQF/circolare-della-gran-bretagna"
                },
                {
                    State: "it",
                    ImgFlag: "https://icons8.it/icon/WmOfu4e7Rvp7/italy"
                },
                {
                    State: "fr",
                    ImgFlag: "https://icons8.it/icon/YwnngGdMBmIV/france"
                },
                {
                    State: "de",
                    ImgFlag: "https://icons8.it/icon/vRrbNnaD93Ys/germany"
                },
                {
                    State: "ja",
                    ImgFlag: "https://icons8.it/icon/FeSjxToMjcoN/japan"
                },
                {
                    State: "fi",
                    ImgFlag: "https://icons8.it/icon/4H2bz4a1RByw/finland"
                },
                {
                    State: "no",
                    ImgFlag: "https://icons8.it/icon/iUYNm0kbGahw/norway"
                },
                {
                    State: "ro",
                    ImgFlag: "https://icons8.it/icon/R0NO2pastBPs/romania"
                }
            ],
            urlPattern: "https://image.tmdb.org/t/p/w342/"
        };
    },
    methods: {
        filterResults() {
            const filteredUrl = `https://api.themoviedb.org/3/search/movie?api_key=8d990f04e5e690857302762e75a6986a&language=it_IT&query=%2A${this.searchMovie}`
            console.log(filteredUrl);

            axios
                .get(filteredUrl)
                .then((response) => {
                    /* console.log(response.data.results); */
                    this.MovieCards = response.data.results
                    /* console.log(this.MovieCards); */

                })
                .catch(error => {
                    console.error(error);
                })
        },
        filterFlag(param) {
            this.Flags.forEach(Flag => {
                if (Flag.State === param) {
                    console.log(Flag.ImgFlag);
                    return Flag.ImgFlag
                }
            })
        }
    },
    /* computed: {
        filterFlag(param) {
            this.Flags.filter((Flag) => {
                if (Flag.State === param) {
                    return this.Flag.imgFlag
                }
            })
        }
    } */

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
                        <li class="title">{{ MovieCard.title }}</li>
                        <li> {{ MovieCard.original_title }}</li>
                        <li> {{ MovieCard.original_language }}</li>
                        <li> {{ MovieCard.vote_average }}</li>
                        <li><img :src="filterFlag(MovieCard.original_language)" alt=""></li>
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
    text-align: center;
}

.title {
    font-weight: bold;
    font-size: 20px;
}
</style>