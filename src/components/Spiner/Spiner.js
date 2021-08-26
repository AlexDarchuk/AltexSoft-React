import React from 'react';
import style from './Spiner.module.css';

export const Spiner = ({ spinerPost, newArticleSpiner, signupSpiner, logInSpiner }) => {
    return (
        <div className={style.loaderContainer}
            data-teg = {spinerPost}
            data-signup={signupSpiner}
            data-log-in={logInSpiner}
            data-new-article={newArticleSpiner}
        >
            <div className={style.loader}></div>
        </div>
    )
};
