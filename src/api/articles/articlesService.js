import { AXIOS } from './axiosConfig';

class ArticlesService {
    async getAllArticles() {
        try {
            const {data}  = await AXIOS.get('/articles');
            return data;
        } catch(err) {
            console.error(err);
        }
    }

    // async getAllUsers() {
    //     try {
    //         const {data}  = await AXIOS.get('/users')
    //         return data;
    //     } catch(err) {
    //         console.error(err);
    //     }
    // }

    async getAllTags() {
        try {
            const { data } = await AXIOS.get('/tags')
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
