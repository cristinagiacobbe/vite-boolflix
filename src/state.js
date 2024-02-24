import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_api_url: "https://api.themoviedb.org/3/search/multi?api_key=8d990f04e5e690857302762e75a6986a&language=it_IT&query=%2A",
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
        },
        {
            State: "es",
            ImgFlag: "https://flagcdn.com/32x24/es.png"
        }
    ],

    filterResults() {
        const filteredUrl = `${state.base_api_url}${this.searchMovie}`
        //console.log(filteredUrl);

        axios
            .get(filteredUrl)
            .then((response) => {
                /* console.log(response.data.results); */
                this.MovieCards = response.data.results
                console.log(this.MovieCards);
                this.matchFlag()
                this.roundVote()
            })
            .catch(error => {
                console.error(error);
            })
    },
    matchFlag() {
        this.MovieCards.forEach((MovieCard) => {
            this.Flags.forEach((Flag) => {
                if (Flag.State === MovieCard.original_language) {
                    return MovieCard.flag = Flag.ImgFlag
                }
            })
            //console.log(this.MovieCards);
        })
    },
    roundVote() {
        this.MovieCards.forEach((MovieCard) => {
            return MovieCard.vote_average = Math.round(MovieCard.vote_average / 2)
        })
    }
})