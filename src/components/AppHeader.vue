<script>
import { state } from '../state.js'
import SearchMovie from './SearchMovie.vue'

export default {
    name: 'AppHeader',
    components: {
        SearchMovie,
    },
    data() {
        return {
            state
        }
    },

}

</script>
<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="/logo_boolflix.png" alt="logo">
            </div>
            <div class="searchbar">
                <SearchMovie @search="state.filterResults()"></SearchMovie>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    height: 100px;
    background-color: var(--bf-dark)
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    height: 90px;
}
</style>