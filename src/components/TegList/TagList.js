import React from 'react';
import style from './TagList.module.css';
import { Spiner, Tegs } from '..'

export const TagList = ({items, isLoading, chanhgIndex}) => {
    return (
        <div className={style.tegList}>
            {isLoading 
                ? <Spiner spinerPost/> 
                : <Tegs props={items} index={chanhgIndex}/>
            }
        </div>
    );
};