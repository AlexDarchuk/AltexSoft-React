import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { NewArticle } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { Redirect } from 'react-router-dom';


export const Layout = ({children}) => {
    const { isNewArticle } = useAuth();
    console.log(isNewArticle);
    return (
     <>
        <Header/>
            {children}
        <Footer/>
            {
                isNewArticle ? <Redirect to='/'/> : <NewArticle/>
            }
        
     </>
    );
}