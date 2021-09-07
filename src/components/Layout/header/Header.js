import React, {useState} from 'react';
import { Link, NavLink, Redirect } from "react-router-dom";
import {Logo} from '../../../shared-components';
import style from './Header.module.css';
import { Icon, Button, Image } from '../../../shared-components';
import { useAuth } from '../../../hooks/useAuth';
import { DropDown } from '../../';
import NewArticle from '../../NewArticle/NewArticle';

export const Header = () => {
    const { isSignIn, dataUser, isNewArticle } = useAuth();
    const [isShowDropDown, setShowDropDown] = useState(false);

    const showDropDown = () => {
        setShowDropDown(!isShowDropDown);
    }

    return (
            <header className={style.header}>
                <div className={style.container}>
                    <Link to='/'>
                        <Logo height={"40px"}/>
                    </Link>
                    <nav className={style.navMenu}>
                        <ul className={style.menu}>
                            <li className={style.menuList}>
                                <NavLink exact to="/"
                                    className={style.link}
                                    activeClassName={style.active}
                                   >
                                    Home
                                </NavLink>
                            </li>
                            {
                                isSignIn ?
                                        <>
                                        <li className={style.loginBlock}>
                                            <Button onClick={showDropDown} logInBtn>
                                                {
                                                    dataUser.image ? <Image src={dataUser.image}/> : <Icon name="user" width={'17px'} color={'rgb(61, 72, 73)'}/>
                                                }
                                                
                                            </Button>
                                            <DropDown dropDownShow={isShowDropDown}/>
                                            <span className={style.userName}>{dataUser.username} </span>
                                            
                                        </li>
                                        <Redirect to='/'/>
                                        </>
                                      :
                                      <>
                                            <li className={style.menuList}>
                                                <NavLink exact to="login"
                                                    className={style.link}
                                                    activeClassName={style.active}
                                                    >
                                                    Log in
                                                </NavLink>
                                            </li>
                                            <li className={style.menuList}>
                                                <NavLink to="register"
                                                    className={style.link}
                                                    activeClassName={style.active}>
                                                    Sign up
                                                </NavLink>
                                            </li>
                                        </>           
                            }    
                        </ul>
                    </nav>
                </div>
                <>
                {
                isNewArticle ? <Redirect to='/'/> : <NewArticle/>
                }
                </>
            </header>
    );
};