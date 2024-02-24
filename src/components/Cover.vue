<script>
import { state } from '../state.js'
export default {
    name: 'Cover',
    props: {
        image: String
    },
    data() {
        return {
            state,
            urlPattern: "https://image.tmdb.org/t/p/w342/",
        }
    }
}



</script>
<template>
    <div class="card-cover">
        <img :src="this.urlPattern + image" alt="">
    </div>
</template>

<style scoped>
.card-cover {
    position: absolute;

}

.card-cover:hover {
    display: none;
}

img {
    width: calc(100% - 1rem);
}
</style>
