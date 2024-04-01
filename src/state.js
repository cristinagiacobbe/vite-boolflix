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
    shortCastList: [],
    Genres: [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        },
        {
            "id": 10759,
            "name": "Action & Adventure"
        },
        {
            "id": 10763,
            "name": "News"
        },
        {
            "id": 10764,
            "name": "Reality"
        },
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": 10766,
            "name": "Soap"
        },
        {
            "id": 10767,
            "name": "Talk"
        },
        {
            "id": 10768,
            "name": "War & Politics"
        }
    ],

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
                this.matchGenre(this.MovieCards)
                this.cast(this.MovieCards, this.movieCredits_api_url)
                console.log(this.MovieCards)
                this.concat(this.MovieCards)
            })
        axios
            .get(filteredTvUrl)
            .then((response) => {
                /* console.log(response.data.results); */
                this.TvCards = response.data.results
                this.matchFlag(this.TvCards)
                this.matchGenre(this.TvCards)
                this.roundVote(this.TvCards)
                this.cast(this.TvCards, this.tvCredits_api_url)
                console.log(this.TvCards)
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

    matchGenre(list) {
        list.forEach((Card) => {
            Card.genres = []
            Card.genre_ids.forEach((genre_id) => {
                this.Genres.forEach((Genre) => {
                    if (genre_id === Genre.id) {
                        return Card.genres.push(Genre.name)
                    }
                })
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

            axios
                .get(`${api_url}${Card.id}/credits?api_key=8d990f04e5e690857302762e75a6986a`)
                .then((response) => {
                    this.creditList = response.data.cast
                    this.castList = [];
                    this.creditList.forEach(element => {
                        this.castList.push(element.name)
                    });
                    this.shortCastList = [];
                    for (let i = 0; i < 5; i++) {
                        this.shortCastList += ` ${this.castList[i]} `
                    }
                    Card.cast = this.shortCastList
                })
        })

    },

})
