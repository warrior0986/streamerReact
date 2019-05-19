import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.1.51:8080/reactapiat/api/web",
    headers: {'Access-Control-Allow-Origin': '*', 'Accept' : 'application/json'}
});