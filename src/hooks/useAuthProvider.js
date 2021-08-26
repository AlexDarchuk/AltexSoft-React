import { useState } from 'react';

export const useAuthProvider = () => {
    const [ isSignIn, setSignIn ] = useState(false);
    const [ isNewArticle, setNewArticle] = useState(false);
    const [ isToken, setToken ] = useState(localStorage.getItem('token'));
    const [dataUser, setDataUser] = useState([]);

    const signIn = () => {
        setSignIn(true);
    }

    const signOut = () => {
        setSignIn(false)
    }

    const newArticle = () => {
        setNewArticle(true)
    }

    const getToken = (token) => {
        setToken(token);
    }

    const getDataUser = (user) => {
        setDataUser(user);
    }

    localStorage.setItem('token', isToken);

    return {
        isSignIn,
        isNewArticle,
        signIn,
        newArticle,
        signOut,
        getToken,
        getDataUser,
        dataUser
    }
}