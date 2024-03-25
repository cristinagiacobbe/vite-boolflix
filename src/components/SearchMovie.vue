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
        <input name="searchMovie" type="text" v-model="state.searchMovie"
            placeholder="Inserisci il titolo di un film/serie tv" @keypress.enter="$emit('search')">
        <button @click="$emit('search')">Search</button>
    </div>
</template>


<style scoped>
input,
button {
    padding: 5px;
    border-radius: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input {
    width: 300px;
}

.container {
    display: flex;
    justify-content: end;
    gap: 1rem;
}
</style>