import axios from 'axios';

axios.get('https://conduit.productionready.io/api/articles')
    .then(data => console.log(data))