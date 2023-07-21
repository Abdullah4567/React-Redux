import axios from 'axios'
const client = axios.create({
    baseURL: 'https://dummyjson.com',
    // baseURL: `https://fakestoreapi.com`,
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
    }
});
export default client