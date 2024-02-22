<script>
import { state } from '../state.js'

export default {
    name: 'SearchMovie',
    emits: ['search'],
    data() {
        return {
            state
        }
    },

}


</script>
<template>
    <div class="container">
        <input name="searchMovie" type="text" v-model="state.searchMovie" placeholder="Inserisci il titolo di un film">
        <button @click="$emit('search')">Search</button>
    </div>
</template>
<style></style>