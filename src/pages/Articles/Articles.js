import React from 'react';
import { Link } from "react-router-dom";
import { Article, Spiner,  } from '../../components';
import AddComment from '../../components/AddComment/AddComment';
import style from './Articles.module.css';
import { useAuth } from '../../hooks';


export const Articles = () => {
    const {oneArticle, isSignIn} = useAuth();
    
    return (
        <main className={style.articleMain}>
            <>
                {
                    oneArticle.title ? <Article props={oneArticle} isSignIn={isSignIn}/> : <Spiner/>
                }
            </>
            <>  
                {
                    isSignIn ? <AddComment/> : <div className={style.commentLInk}><Link className={style.signUpLink} to="login"> Sign In</Link> or <Link className={style.signUpLink} to="register">Sign Up</Link> to add comments on this article.</div>
                }
            </>
        </main>
    );
};
