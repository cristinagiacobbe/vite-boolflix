<script>
import { state } from '../state.js'
import Vote from './Vote.vue'
import Overview from './Overview.vue'
import Flag from './Flag.vue'

export default {
    name: 'CardText',
    props: {
        TotalCard: Object
    },
    components: {
        Vote,
        Overview,
        Flag,
    },
    data() {
        return {
            state,
        }
    },

}
</script>
<template>
    <div class="card-text">
        <ul>
            <li class="title"><strong>Titolo:</strong> {{ TotalCard.title ? TotalCard.title : TotalCard.original_name }}
            </li>
            <li> {{ TotalCard.original_title ? "Titolo originale: " + TotalCard.original_title : "" }} </li>
            <Vote :TotalCard="TotalCard.vote_average"></Vote>
            <Flag :TotalCard="TotalCard"></Flag>
            <Overview :TotalCard="TotalCard"></Overview>
            <br>
            <hr>
            <strong>Cast:</strong>
            <li>{{ TotalCard.cast }}</li>

        </ul>
    </div>
</template>

<style scoped>
.card-text {
    height: 470px;
    color: white;
    border: 1px solid white;
    background-color: black;
}

li {
    list-style: none;
}

.title {
    font-size: 20px;
}

.text {
    font-weight: lighter;
}

.overview {
    padding-top: 0.5rem;
}
</style>