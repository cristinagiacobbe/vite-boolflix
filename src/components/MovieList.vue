<script>
import { state } from '../state.js'

import CardText from './CardText.vue'

export default {
    name: 'MovieList',
    components: {
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
    padding: 0.5rem;
}

.card {
    position: relative;
    height: 480px;
}
</style>