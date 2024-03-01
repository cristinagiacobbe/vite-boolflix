<script>
import { state } from '../state.js'
export default {
    name: 'Flag',
    data() {
        return {
            state,
            alt_flag: "/universal_flag.png",
        }
    },
    props: {
        TotalCard: Object
    }
}
</script>
<template>
    <li v-if="TotalCard.flag.length > 0"><img :src="TotalCard.flag" :alt="TotalCard.original_language"></li>
    <li v-else><img class="unFlag" :src="alt_flag" :alt="TotalCard.original_language"></li>
</template>

<style scoped>
.unFlag {
    width: 50px;
}
</style>