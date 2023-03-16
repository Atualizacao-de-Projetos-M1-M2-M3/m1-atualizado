import axios from "axios"

export const api = axios.create({
    baseURL: "https://atualizacao-do-projeto-m1.onrender.com",
    timeout: 5000
})