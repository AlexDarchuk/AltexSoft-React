import {useEffect} from 'react';
import { followUser, unFollowUser } from '../api/articles';
import { useAuth } from './useAuth';
import { useDataArticle } from './useDataArticle';

export const useDataUser = () => {
    const { getUserFollow } = useAuth();
    const { getArticleUser } = useDataArticle();

    const getFollowUser = async (username) => {
        try {
            const { profile } = await followUser(username);

            getArticleUser(profile.username);
            getUserFollow(profile);
        } catch(err) {
            console.error(err);
        }
    }

    const getUnFollowUser = async (username) => {
        try {
            const { profile } = await unFollowUser(username);

            getArticleUser(profile.username);
            getUserFollow(profile);
        } catch(err) {
            console.error(err);
        }
    }

    return {getFollowUser, getUnFollowUser}
    
}