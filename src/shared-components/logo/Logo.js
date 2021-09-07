import React from 'react';
import LogoR from '../../static/images/codemonkey_logo.png';
import style from './Avatar.module.css';

export const Logo = ({height}) => {
    return (
        <>
            <img style={{height}} className={style.logo} src={LogoR} alt="Logo"/>
        </>
    );
};