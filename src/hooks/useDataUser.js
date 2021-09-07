import { followUser, unFollowUser, profileUser } from '../api/articles';
import { useAuth } from './useAuth';
import { useDataArticle } from './useDataArticle';

export const useDataUser = () => {
    const { getUserFollow, changeFollowingBtn, getDataProfileUser } = useAuth();
    const { getArticleUser } = useDataArticle();

    const getFollowUser = async (username) => {
        try {
            const { profile } = await followUser(username);
            const {following} = profile;

            changeFollowingBtn(following)
            getArticleUser(profile.username);
            getUserFollow(profile);
        } catch(err) {
            console.error(err);
        }
    }

    const getUnFollowUser = async (username) => {
        try {
            const { profile } = await unFollowUser(username);
            const {following} = profile;

            changeFollowingBtn(following);
            getArticleUser(profile.username);
            getUserFollow(profile);
        } catch(err) {
            console.error(err);
        }
    }

    const getProfileUser = async (name) => {
        try{
            const { profile } = await profileUser(name);

            getDataProfileUser(profile);
            changeFollowingBtn(profile.following)
        } catch(err) {
            console.error(err);
        }
    }

    return {getFollowUser, getUnFollowUser, getProfileUser}
    
}