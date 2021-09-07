import React from 'react';
import heroIcon from '../../../static/images/hero-icon.png';
import style from './Hero.module.css';

export const Hero = () => {
    return (
        <div className={style.titleImage}>
            <div className={style.titleBlock}>
                <h1 className={style.titleText}>
                    A place to share my React knowledge.
                </h1>
                <img src={heroIcon} alt='Icon'/>
            </div>
        </div>
    );
};
