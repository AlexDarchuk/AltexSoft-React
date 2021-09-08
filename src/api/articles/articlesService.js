import { AXIOS, AUTHINSTANS, } from './axiosConfig';

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

    async favoriteArticle(slug) {
        try {
            const {data} = await AUTHINSTANS.post(`/api/articles/${slug}/favorite`);

            return data;
        } catch(err) {
            console.log(err)
        }
    }

    async getSingleArticle(slug) {
        try {
            const { data } = await AXIOS.get(`/api/articles/${slug}`);

            return data;
        }catch(err) {
            console.error(err)
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

    async deleteArticle(slug) {
        try {
            const { data } = await AUTHINSTANS.delete(`/api/articles/${slug}`);

            return data;
        }catch(err) {
            console.error(err);
        }
    }

    async updateArticle(slug, article) {
        try {
            const { data } = await AUTHINSTANS.put(`/api/articles/${slug}`, {
                article
            });

            return data;
        }catch(err) {
            console.error(err);
        }
    }

    async articleFavorite(name) {
        try {
            const {data} = await AXIOS.get(`/api/articles?favorited=${name}`);

            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async myFeedArticle(feedCount) {
        try {
            const {data}  = await AUTHINSTANS.get(`/api/articles/feed?limit=${feedCount}`);
            
            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async listTags(tag) {
        try {
            const {data} = await AXIOS.get(`/api/articles?tag=${tag}&limit=200`);

            return data;
        } catch(err) {
            console.error(err);
        }
    }

    async createComment(slug, comment) {
        try {
            const { data } = await AUTHINSTANS.post(`/api/articles/${slug}/comments`, {
                comment
            })

            return data;
        } catch(err) {
            console.error(err)
        }
    }

    async listOfComments(slug) {
        try {
            const { data } = await AXIOS.get(`/api/articles/${slug}/comments`)

            return data;
        } catch(err) {
            console.error(err)
        }
    }

}

export const articlesService = new ArticlesService();
