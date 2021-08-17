import React from 'react';
import style from './Button.module.css';

export const Button = ( {children, onClick, btnImg, btnTegs, btnShowTeg, btnLogIn, btnSignUp, btnName, btmMore}) => {
console.log(onClick);
    return (
        <>
            <button
            data-tegs-btn={btnTegs}
            data-show-tegs={btnShowTeg}
            data-log-in={btnLogIn}
            data-sign-up={btnSignUp}
            data-btn-img={btnImg}
            data-btn-name={btnName}
            data-btn-more={btmMore}
            onClick={onClick}
            className={style.button} 
            type='button'>
                {children}
            </button>
        </>
    );
};
