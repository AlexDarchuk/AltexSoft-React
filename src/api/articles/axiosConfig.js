import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
});

// export const AXIOS = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// });

