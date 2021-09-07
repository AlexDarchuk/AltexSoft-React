import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from './DropDown.module.css';
import { Button } from '../../shared-components';
import { useAuth, useDataArticle } from '../../hooks';

export const DropDown = ({dropDownShow}) => {
    const { getArticleFavorite, getArticleUser} = useDataArticle();
    const { signOut, dataUser, getNameModalNewArticle } = useAuth();
    const { username } = dataUser;
    const history = useHistory();
   
    const logOutUser = () => {
        sessionStorage.removeItem('token');
        signOut();
        history.push('/');
    }

    const showModalArticle = () => {
        const modalArticle = document.getElementById('modalArticle');
        modalArticle.style.display = 'block';
        getNameModalNewArticle('New Article');
    }

    const openProfile = () => {
        getArticleFavorite(username);
        getArticleUser(username);
    }
    
    return (
        <div className={ dropDownShow ? `${style.dropDown} ${style.active}` : `${style.dropDown} ${style.hide}`}>
            <ul className={style.dropList}>
                <li className={style.dropItem}>
                    <Button dropDownBtn onClick={openProfile}>
                        <Link className={style.profileLink} to='/profile'>Profile</Link>
                    </Button>
                </li>
                <li className={style.dropItem}>
                    <Button dropDownBtn onClick={showModalArticle}>New Article</Button>
                </li>
                <li className={style.dropItem}>
                    <Button onClick={logOutUser} dropDownBtnOut>Log Out</Button>
                </li>
            </ul>
        </div>
    );
};