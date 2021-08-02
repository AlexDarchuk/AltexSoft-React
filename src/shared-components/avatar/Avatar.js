import React from 'react';
import Logo from '../../static/images/codemonkey_logo.png';
import style from './Avatar.module.css';

const Avatar = ({height}) => {
    return (
        <>
            <img style={{height}} className={style.logo} src={Logo} alt="Logo"/>
        </>
    );
};

export default Avatar;