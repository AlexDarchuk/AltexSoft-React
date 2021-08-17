import React from 'react';
import style from './Spiner.module.css';

export const Spiner = ({ spinerPost }) => {
    return (
        <div className={style.loaderContainer}
            data-teg = {spinerPost}
        >
            <div className={style.loader}></div>
        </div>
    )
};
