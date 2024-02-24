<script>
import { state } from '../state.js'
export default {
    name: 'Vote',
    data() {
        return {
            state,
        }
    },
    props: {
        MovieCard: Number
    }
}


</script>
<template>
    <div class="vote">
        <span>Voto:</span>
        <li v-for="vote in MovieCard">
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        </li>
        <li v-for="vote in (5 - MovieCard)">
            <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
        </li>
    </div>
</template>

<style>
.vote {
    display: flex;
}
</style>