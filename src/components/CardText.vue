<script>
import { state } from '../state.js'
import Vote from './Vote.vue'
import Overview from './Overview.vue'

export default {
    name: 'CardText',
    props: {
        TotalCard: Object
    },
    components: {
        Vote,
        Overview,
    },
    data() {
        return {
            state,
            alt_flag: "/universal_flag.png",
        }
    },

}
</script>
<template>
    <div class="card-text">
        <li class="title"><strong>Titolo:</strong> {{ TotalCard.title ? TotalCard.title : TotalCard.original_name }}</li>
        <li> {{ TotalCard.original_title ? "Titolo originale: " + TotalCard.original_title : "" }} </li>
        <Vote :TotalCard="TotalCard.vote_average"></Vote>

        <li v-if="TotalCard.flag.length > 0"><img :src="TotalCard.flag" :alt="TotalCard.original_language"></li>
        <li v-else><img class="unFlag" :src="alt_flag" :alt="TotalCard.original_language"></li>

        <Overview :TotalCard="TotalCard"></Overview>
    </div>
</template>

<style scoped>
.card-text {
    height: 489px;
    color: white;
    border: 1px solid white;
    background-color: black;
    padding: 1rem;
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

.unFlag {
    width: 50px;
}
</style>