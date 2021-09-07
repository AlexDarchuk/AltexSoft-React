import { AUTHINSTANS } from './axiosConfig';

export const deleteComments = async (slug, id) => {
    try {
        const { data } = await AUTHINSTANS.delete(`/api/articles/${slug}/comments/${id}`);
       
        return data;
    } catch(err) {
        console.error(err);
    }
};
