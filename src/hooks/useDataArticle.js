import { articlesService } from '../api/articles';
import { useAuth } from './useAuth';

export const useDataArticle = () => {
    const { getDataArticleUser, getDataFavoriteArticle, getListTags } = useAuth();

    const getArticleUser = async (name) => {
        try {
            const { articles } = await articlesService.articleUser(name);

            getDataArticleUser(articles);
        } catch(err) {
            console.error(err);
        }
    }

    const getArticleFavorite = async (name) => {
        try {
            const { articles } = await articlesService.articleFavorite(name);

            getDataFavoriteArticle(articles)
        } catch(err) {
            console.error(err)
        }
    }

    const getTagsList = async (tag) => {
        try {
            const { articles } = await articlesService.listTags(tag);

            getListTags(articles)
        }catch(err) {
            console.error(err)
        }
    }

    return {getArticleUser, getArticleFavorite, getTagsList}
    
}