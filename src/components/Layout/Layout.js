import React from 'react';
import { Footer, Header } from './';


export const Layout = ({children}) => {
    return (
     <>
        <Header/>
        <>
            {children}
        </>
        <Footer/>
     </>
    );
}