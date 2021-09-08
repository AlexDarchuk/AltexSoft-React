import { useState } from 'react';

export const useAuthProvider = () => {
    const [ isSignIn, setSignIn ] = useState(false);
    const [ isNewArticle, setNewArticle] = useState(false);
    const [ isUpdateUser, setUpdateUser] = useState(true);
    const [dataUser, setDataUser] = useState([]);
    const [dataProfile, setDataProfile] = useState([]);
    const [isDataProfileLoading, setDataProfileLoading] = useState(false);
    const [dataOneArticle, setDataOneArticle] = useState([]);
    const [dataFavoriteArticle, setDataFavoriteArticle] = useState([]);
    const [dataFollowUser, setDataFollowUser] = useState([]);
    const [tagsList, setTagsList] = useState([]);
    const [oneArticle, setOneArticle] = useState([])
    const [followNameUser, setFollowNameUser] = useState('');
    const [unFollowNameUser, setUnFollowNameUser] = useState('');
    const [slugListComments, setSlugListComments] = useState('');
    const [userName, setUserName] = useState('');
    const [nameModalNewAticle, setNameModalNewArticle] = useState('');
    const [followingUser, setFollowingUser] = useState(null);
    const [createdNewComment, setCreatedNewComment] = useState(false);
    const [isTagsLOading, setTegsLOading] = useState(false);
    const [isDeleteArticle, setIsDeleteArticle] = useState(false);
    const [nameAndCountTag, setNameAndCountTAg] = useState({name: '', indexTag: null});
    
    

    const signIn = () => {
        setSignIn(true);
    }

    const signOut = () => {
        setSignIn(false)
    }

    const loadUserProfile = (point) => {
        setDataProfileLoading(point);
    }

    const newArticle = () => {
        setNewArticle(true)
    }

    const loadingTags = (point) => {
        setTegsLOading(point)
    }

    const updateUser = (point) => {
        setUpdateUser(point);
    }

    const getNameAndCountTag = ( tag, number) => {
        setNameAndCountTAg({
            name: tag,
            indexTag: number
        });
    }

    const changeValueComment = (point) => {
        setCreatedNewComment(point)
    }
    const deleteArticleFlag = (point) => {
        setIsDeleteArticle(point);
    }

    const getNameModalNewArticle = (title) => {
        setNameModalNewArticle(title);
    }

    const getSlugListComments =(slug) => {
        setSlugListComments(slug)
    }

    const changeFollowingBtn = (followingUser) => {
        setFollowingUser(followingUser)
    }

    const getDataSingleArticle = (article) => {
        setOneArticle(article);
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

    const getUserFollow = (user) => {
        setDataFollowUser(user);
    }

    const getDataUser = (user) => {
        setDataUser(user);
    }

    const getUserName =(name) => {
        setUserName(name);
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

    const { token } = dataUser;

    if ( token !== undefined) {
        sessionStorage.setItem('token', token);
    } else {
        sessionStorage.removeItem('token')
    }
    

    return {
        isSignIn,
        isNewArticle,
        isUpdateUser,
        updateUser,
        signIn,
        newArticle,
        signOut,
        getDataUser,
        dataUser,
        dataProfile,
        getDataProfileUser,
        getDataArticleUser,
        dataOneArticle,

        getSlugListComments,
        slugListComments,

        loadUserProfile,
        isDataProfileLoading,

        deleteArticleFlag,
        isDeleteArticle,

        loadingTags,
        isTagsLOading,

        getNameModalNewArticle,
        nameModalNewAticle,

        getUserName,
        userName,
        
        getDataFavoriteArticle,
        dataFavoriteArticle,

        getUserFollow,
        dataFollowUser,

        oneArticle,
        getDataSingleArticle,

        changeFollowingBtn,
        followingUser,

        getFollowUserName,
        followNameUser,

        getUnFollowUserName,
        unFollowNameUser,
        getListTags,
        tagsList,

        getNameAndCountTag,
        nameAndCountTag,
         
        changeValueComment,
        createdNewComment

    }
}