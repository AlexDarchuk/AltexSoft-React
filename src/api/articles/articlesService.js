import { AXIOS } from './axiosConfig';

class ArticlesService {
    async getAllArticles() {
        try {
            const {data}  = await AXIOS.get('/api/articles?limit=100');
            
            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async getAllTags() {
        try {
            const { data } = await AXIOS.get('api/tags')
            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async articleUser(name) {
        try {
            const {data} = await AXIOS.get(`/api/articles?author=${name}`);

            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async articleFavorite(name) {
        try {
            const {data} = await AXIOS.get(`/api/articles?favorited=${name}`);

            console.log(data);
            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async listTags(tag) {
        try {
            const {data} = await AXIOS.get(`/api/articles?tag=${tag}`);

            console.log(data);
            return data;
        } catch(err) {
            console.error(err);
        }
    }

}

export const articlesService = new ArticlesService();

// export const getRequest = async () => {
//     try {
//         const { data } = await AXIOS.get('https://conduit.productionready.io/api/articles');
//         console.log(data);
//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// };
