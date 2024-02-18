import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_api_url: "https://api.themoviedb.org/3/search/movie?api_key=8d990f04e5e690857302762e75a6986a&query=%2A"
})