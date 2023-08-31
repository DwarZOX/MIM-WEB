import axios from "axios";
const instance = axios.create({
    baseURL: 'https://frontendreq.pondokprogrammer.com/api',
})

export default instance