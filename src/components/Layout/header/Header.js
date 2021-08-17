import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Avatar from '../../../shared-components/avatar';
import style from './Header.module.css';

export const Header = () => {
    return (
            <header className={style.header}>
                <div className={style.container}>
                    <Link to='/'>
                        <Avatar height={"40px"}/>
                    </Link>
                    <nav className={style.navMenu}>
                        <ul className={style.menu}>
                            <li className={style.menuList}>
                                <NavLink to="/"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        textDecoration: 'none',
                                        color: "White"
                                    }}>
                                    Home
                                </NavLink>
                            </li>
                            <li className={style.menuList}>
                                <NavLink to="login"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        textDecoration: 'none',
                                        color: "White"
                                    }}
                                    className={style.menuLink}
                                    >
                                    Log in
                                </NavLink>
                            </li>
                            <li className={style.menuList}>
                                <NavLink to="register"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        textDecoration: 'none',
                                        color: "White"
                                    }}
                                    className={style.menuLink}>
                                    Sign up
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};