import React from 'react';
import style from './TegList.module.css';
import { Spiner, Tegs } from '../../components'

export const TegList = ({items, isLoading}) => {
    return (
        <div className={style.tegList}>
            {isLoading 
                ? <Spiner spinerPost/> 
                : <Tegs props={items}/>
            }
        </div>
    );
};