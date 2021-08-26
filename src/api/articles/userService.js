import { AXIOS, AUTHINSTANS } from './axiosConfig';

export const createUser = async (user) => {
    try {
        const { data } = await AUTHINSTANS.post('/api/users', {
            user
        });
       
        return data;
    } catch(err) {
        console.error(err);
    }
};

export const logInUser = async (user) => {
    try {
        const { data } = await AUTHINSTANS.post('/api/users/login', {
            user
        });
        
        return data;
    } catch(err) {
        console.error(err);
    }
};

export const createArticle = async (article) => {
    try {
        const { data } = await AUTHINSTANS.post('/api/articles', {
            article
        });
        return data;
    } catch(err) {
        console.error(err);
    }
}



