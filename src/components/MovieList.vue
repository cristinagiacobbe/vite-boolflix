<script>
import { state } from '../state.js'
import Cover from './Cover.vue'
import CardText from './CardText.vue'

export default {
    name: 'MovieList',
    components: {
        Cover,
        CardText,
    },
    data() {
        return {
            state,
        }
    },

}


</script>

<template>
    <div class="container">

        <div class="row">
            <div class="col" v-for="TotalCard in state.TotalCards">
                <div class="card">
                    <ul>
                        <Cover :image="TotalCard.poster_path"></Cover>
                        <CardText :TotalCard="TotalCard"></CardText>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.row {
    display: flex;
    flex-wrap: wrap;
}

.col {
    width: calc(100% / 12 * 3);
}

.card {
    position: relative;
    padding: 0.5rem;
    height: 470px;
}

.card-text {
    display: none;
}

.card:hover .card-text {
    display: block;
}

.card:hover img {
    display: none;
}
</style>