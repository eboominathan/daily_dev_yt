import axios from "axios"

const myAxios  = axios.create({
    baseURL : "http://localhost/8000",
    headers:{
        Accept : "application/json"
    },
});

export default myAxios;