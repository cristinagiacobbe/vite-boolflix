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
        TotalCard: Number
    }
}


</script>
<template>
    <div class="vote">
        <span><strong>Voto:</strong></span>
        <li v-for="vote in TotalCard">
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        </li>
        <li v-for="vote in (5 - TotalCard)">
            <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
        </li>
    </div>
</template>

<style>
.vote {
    display: flex;
    padding: 0.5rem 0;
}
</style>