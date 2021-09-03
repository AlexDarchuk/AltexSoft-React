import React from 'react';
import style from './Spiner.module.css';

export const Spiner = ({ spinerPost, profileSpiner, newArticleSpiner, signupSpiner, logInSpiner }) => {
    return (
        <div className={style.loaderContainer}
            data-teg = {spinerPost}
            data-signup={signupSpiner}
            data-log-in={logInSpiner}
            data-new-article={newArticleSpiner}
            data-profile={profileSpiner}
        >
            <div className={style.loader}></div>
        </div>
    )
};
