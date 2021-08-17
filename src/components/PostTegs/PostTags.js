import React from 'react';
import style from './PostTags.module.css';

export const PostTags = ({ teg }) => {
    return (
        <>
            <li className={style.tegsItem}>#{teg}&nbsp;</li>
        </>
    );
};