<script>
import { state } from '../state.js'
import axios from 'axios'

export default {
    name: 'InitialPopularList',
    data() {
        return {
            state,
            popularUrl: "https://api.themoviedb.org/3/movie/popular?api_key=8d990f04e5e690857302762e75a6986a&page=1",
            urlPattern: "https://image.tmdb.org/t/p/w342/",
        }
    },
    /* props: {
        TotalCard: Object
    }, */
    mounted(){
    axios
        .get(this.popularUrl)
        .then((response) => {                
        state.popularCards = response.data.results
    })
    },
}
</script>
<template>
    <div class="container">
    <h2 class="Found">{{ getFound }}</h2>
     <h2>{{ state.searchMovie.length > 0 ? "" : "I più popolari"}}</h2>
     <div class="row">
         <div class="col" v-for="popularCard in state.popularCards">
             <div class="card">
                 <ul>
                    <div class="cardPopular">
                        <img :src="this.urlPattern + popularCard.poster_path" alt="">
                    </div>
                 </ul>
             </div>
         </div>
     </div>
</div>
</template>

<style scoped>
h2{
    color: rgba(255, 0, 0, 0.766);
}
</style>