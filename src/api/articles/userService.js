import { AUTHINSTANS } from './axiosConfig';

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

export const profileUser = async (username) => {
    try {
        const { data } = await AUTHINSTANS.get(`/api/profiles/${username}`);

        return data;
    } catch(err) {
        console.error(err);
    }
}

export const updateProfile = async (user) => {
    try {
        const { data } = await AUTHINSTANS.put('/api/user', {
            user
        });

        return data;
    } catch(err) {
        console.error(err);
    }
}

export const followUser = async (username) => {
    try {
        const { data } = await AUTHINSTANS.post(`/api/profiles/${username}/follow`);

        console.log(data);
        return data;
    } catch(err) {
        console.error(err);
    }
}

export const unFollowUser = async (username) => {
    try {
        const { data } = await AUTHINSTANS.delete(`/api/profiles/${username}/follow`);

        console.log(data);
        return data;
    } catch(err) {
        console.error(err);
    }
}

export const createArticle = async (article) => {
    console.log(article);
    try {
        const { data } = await AUTHINSTANS.post('/api/articles', {
            article
        });

        
        return data;
    } catch(err) {
        console.error(err);
    }
}



