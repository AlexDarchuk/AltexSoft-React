import React from 'react';
import style from './Article.module.css';

export const Article = ({ title, description }) => {
    return (
        <div className={style.article}>
            <h4 className={style.title}>{title}</h4>
            <p className={style.text}>{description}</p>
        </div>
    );
};