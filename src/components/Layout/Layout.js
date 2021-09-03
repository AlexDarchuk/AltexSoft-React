import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { useAuth } from '../../hooks/useAuth';
import { Redirect } from 'react-router-dom';
import EditUser from '../EditUser/EditUser';
import NewArticle from '../NewArticle/NewArticle';


export const Layout = ({children}) => {
    const { isNewArticle, dataUser } = useAuth();
    const { username, image, bio, email} = dataUser;

    console.log(dataUser);

    const initialFormValues = {
        image: image,
        username: username,
        bio: bio,
        email: email,
        password: ''
    }
    return (
     <>
        <Header/>
            {children}
        <Footer/>
            {
                isNewArticle ? <Redirect to='/'/> : <NewArticle/>
            }
        <EditUser initialValues = {initialFormValues}/>
     </>
    );
}