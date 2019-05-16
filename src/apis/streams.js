import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/reactapiat/api/web",
    headers: {'Access-Control-Allow-Origin': '*', 'Accept' : 'application/json'}
});