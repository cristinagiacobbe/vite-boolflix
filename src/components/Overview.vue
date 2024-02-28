<script>
import { state } from '../state.js'
export default {
    name: 'Overview',
    data() {
        return {
            state
        }
    },
    props: {
        TotalCard: Object
    },
    methods: {
        Slice(item) {
            if (item.length > 350) {
                return `${item.slice(0, 350)}...`;
            } else {
                return item
            }
        }
    }
}
</script>
<template>
    <li class="overview"><strong>Overview:</strong> {{ Slice(TotalCard.overview) }}</li>
</template>
<style></style>