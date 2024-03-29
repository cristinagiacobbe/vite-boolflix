import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    movie_api_url: "https://api.themoviedb.org/3/search/movie?api_key=8d990f04e5e690857302762e75a6986a&language=it_IT&query=%2A",
    tv_api_url: "https://api.themoviedb.org/3/search/tv?api_key=8d990f04e5e690857302762e75a6986a&language=it_IT&query=%2A",
    movieCredits_api_url: "https://api.themoviedb.org/3/movie/",
    tvCredits_api_url: "https://api.themoviedb.org/3/tv/",
    MovieCards: [],
    TvCards: [],
    TotalCards: [],
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
    popularCards: [],
    creditList: [],
    castList: [],
    shortCastList: "",

    filterResults() {
        const filteredMovieUrl = `${state.movie_api_url}${this.searchMovie}`
        const filteredTvUrl = `${state.tv_api_url}${this.searchMovie}`
        this.TotalCards = []
        this.popularCards = []
        axios
            .get(filteredMovieUrl)
            .then((response) => {
                /* console.log(response.data.results); */
                this.MovieCards = response.data.results
                this.matchFlag(this.MovieCards)
                this.roundVote(this.MovieCards)
                this.cast(this.MovieCards, this.movieCredits_api_url)
                this.concat(this.MovieCards)
            })
        axios
            .get(filteredTvUrl)
            .then((response) => {
                /* console.log(response.data.results); */
                this.TvCards = response.data.results
                this.matchFlag(this.TvCards)
                this.roundVote(this.TvCards)
                this.cast(this.TvCards, this.tvCredits_api_url)
                this.concat(this.TvCards)
            })
            .catch(error => {
                console.error(error);
            })

    },
    matchFlag(list) {
        list.forEach((Card) => {
            Card.flag = ""
            this.Flags.forEach((Flag) => {
                if (Flag.State === Card.original_language) {
                    return Card.flag = Flag.ImgFlag
                }
            })
        })
    },
    roundVote(list) {
        list.forEach((Card) => {
            return Card.vote_average = Math.round(Card.vote_average / 2)
        })
    },
    concat(list) {
        this.TotalCards = this.TotalCards.concat(list)
    },
    cast(list, api_url) {
        list.forEach((Card) => {
            this.shortCastList = "";
            this.castList = [];
            axios
                .get(`${api_url}${Card.id}/credits?api_key=8d990f04e5e690857302762e75a6986a`)
                .then((response) => {
                    this.creditList = response.data.cast
                    this.creditList.forEach(element => {
                        this.castList = this.castList.concat(element.name)
                    });
                    for (let i = 0; i < 5; i++) {
                        this.shortCastList += ` ${this.castList[i]} `
                    }
                    console.log(this.shortCastList);
                    Card.cast = this.shortCastList
                })
        })

    },

})
