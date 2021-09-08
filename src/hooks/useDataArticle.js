import { articlesService } from '../api/articles';
import { useAuth } from './useAuth';

export const useDataArticle = () => {
    const { getDataArticleUser, getDataFavoriteArticle, getListTags, getDataSingleArticle, loadingTags, changeValueComment,deleteArticleFlag } = useAuth();

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

    const getDeleteArticle = async ( slug ) => {
        try {
            await articlesService.deleteArticle(slug);

            deleteArticleFlag(true);
        }catch(err) {
            console.error(err);
            deleteArticleFlag(false);
        }finally {
            deleteArticleFlag(false);
        }
    }

    const getUpdateArticle = async (slug, obj) => {
        try {
            const { article } = await articlesService.updateArticle(slug, obj);

            getDataSingleArticle(article);
        }catch(err) {
            console.error(err);
        }
    }

    const getFavoriteArticle = async (slug) => {
        try {
           await articlesService.favoriteArticle(slug);

        }catch(err) {
            console.error(err);
        }
    }

    const getOneArticle = async (slug) => {
        try {
            const { article } = await articlesService.getSingleArticle(slug);

            getDataSingleArticle(article);
        } catch(err) {
            console.error(err)
        }
    }

    const createArticleComment = async (slug, commentObj) => {
        try {
             await articlesService.createComment(slug, commentObj);

             changeValueComment(true);
        } catch(err) {
            console.error(err);
            changeValueComment(false);
        }finally {
            changeValueComment(false);
        }
    }

    const getTagsList = async (tag) => {
        try {
            const { articles } = await articlesService.listTags(tag);

            getListTags(articles);
            loadingTags(true)
        }catch(err) {
            console.error(err);
            loadingTags(false);
        }
    }

    return { getUpdateArticle, getArticleUser, getArticleFavorite, getTagsList, getFavoriteArticle, getOneArticle, createArticleComment, getDeleteArticle}
    
}