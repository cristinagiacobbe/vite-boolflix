<script>
import { state } from '../state.js'

export default {
    name: 'FilterGenres',
    data() {
        return {
            state,
        }
    },

}
</script>

<template>
    <!--   Use v-show to make select-form compare only after choosing a movie/tv -->
    <select v-show="state.searchMovie.length > 0" name="genre" id="genre" v-model="state.selectedGenre"
        @change="state.filterResults">
        <option value="" selected>All</option>
        <option :value="Genre.name" v-for="Genre in state.Genres">{{ Genre.name }}</option>

    </select>

</template>


<style>
select {
    padding: 5px;
    border-radius: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100px;
    /* display: none; */
}
</style>