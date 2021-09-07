import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: 'https://conduit.productionready.io'
});

export const AUTHINSTANS = axios.create({
    baseURL: 'https://conduit.productionready.io',
    headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`
    }
});

