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
    <div class="logo">

    </div>
    <SearchMovie @search="state.filterResults()"></SearchMovie>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: end;
    gap: 2rem;
    margin: 2rem;
}

inupt,
button {
    padding: 5px;
}
</style>