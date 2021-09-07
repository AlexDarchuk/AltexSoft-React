import { deleteComments } from "../api/articles";
import { useAuth } from ".";

export const useDataComments = () => {
    const { changeValueComment } = useAuth();

    const getDeleteComment = async ( slug, id) => {
        try {
            await deleteComments(slug, id);
            
            changeValueComment(true);
        } catch(err) {
            console.log(err);
            changeValueComment(false)
        } finally {
            changeValueComment(false)
        }
    }

    return {getDeleteComment}
}

