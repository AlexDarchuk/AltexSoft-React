import React from 'react';
import style from './Image.module.css';

export const Image = ({src}) => {
    return (
        <>
         <img className={style.image} src={src} alt='Avatar'/>
        </>
    );
};