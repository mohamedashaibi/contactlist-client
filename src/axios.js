import axios from 'axios'
require('dotenv').config()
const instance = axios.create({
    baseURL: 'http://localhost:5000/contacts'
})

export default instance