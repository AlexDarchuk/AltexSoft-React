import React from 'react';
import style from './Button.module.css';

export const Button = ( { children, disabled, type, dropDownBtn, btnCreateArticle, btnEditProfile, btnClose, dropDownBtnOut, logInBtn, onClick, btnImg, btnTegs, btnShowTeg, btnLogIn, btnSignUp, btnName, btmMore}) => {

    return (
        <>
            <button
            data-tegs-btn={ btnTegs }
            data-show-tegs={ btnShowTeg }
            data-log-in={ btnLogIn }
            data-sign-up={ btnSignUp }
            data-btn-img={ btnImg }
            data-btn-name={ btnName }
            data-btn-more={ btmMore }
            data-login-btn={logInBtn}
            data-drop-btn={dropDownBtn}
            data-drop-out-btn={dropDownBtnOut}
            data-create-article={btnCreateArticle}
            data-close-btn={btnClose}
            data-edit-profile={btnEditProfile}
            onClick={ onClick }
            className={ style.button } 
            disabled={disabled}
            type={ type }>
                { children } 
            </button>
        </>
    );
};

Button.defaultProps = {
    type: 'button'
}
