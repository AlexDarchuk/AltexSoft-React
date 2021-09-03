import { useState } from 'react';

export const useAuthProvider = () => {
    const [ isSignIn, setSignIn ] = useState(false);
    const [ isNewArticle, setNewArticle] = useState(false);
    const [ isUpdateUser, setUpdateUser] = useState(true);
    const [ isToken, setToken ] = useState(localStorage.getItem('token'));
    const [dataUser, setDataUser] = useState([]);
    const [dataProfile, setDataProfile] = useState([]);
    const [dataOneArticle, setDataOneArticle] = useState([]);
    const [dataFavoriteArticle, setDataFavoriteArticle] = useState([]);
    const [dataFollowUser, setDataFollowUser] = useState([]);
    const [tagsList, setTagsList] = useState([]);
    const [followNameUser, setFollowNameUser] = useState('');
    const [unFollowNameUser, setUnFollowNameUser] = useState('');

    const signIn = () => {
        setSignIn(true);
    }

    const signOut = () => {
        setSignIn(false)
    }

    const newArticle = () => {
        setNewArticle(true)
    }

    const updateUser = (point) => {
        setUpdateUser(point);
    }

    const getFollowUserName = (username) => {
        setFollowNameUser(username);
    }

    const getUnFollowUserName =(username) => {
        setUnFollowNameUser(username);
    }

    const getListTags = (articles) => {
        setTagsList(articles)
    }

    const getToken = (token) => {
        setToken(token);
    }

    const getUserFollow = (user) => {
        setDataFollowUser(user);
    }

    const getDataUser = (user) => {
        setDataUser(user);
    }


    const getDataProfileUser = (profile) => {
        setDataProfile(profile);
    }

    const getDataArticleUser = (article) => {
        setDataOneArticle(article);
    }

    const getDataFavoriteArticle = (article) => {
        setDataFavoriteArticle(article)
    }

    localStorage.setItem('token', isToken);

    return {
        isSignIn,
        isNewArticle,
        isUpdateUser,
        updateUser,
        signIn,
        newArticle,
        signOut,
        getToken,
        getDataUser,
        dataUser,
        dataProfile,
        getDataProfileUser,
        getDataArticleUser,
        dataOneArticle,

        getDataFavoriteArticle,
        dataFavoriteArticle,

        getUserFollow,
        dataFollowUser,

        getFollowUserName,
        followNameUser,

        getUnFollowUserName,
        unFollowNameUser,
        getListTags,
        tagsList
    }
}