import React from 'react';
import { Link } from "react-router-dom";
import style from './Footer.module.css';
import Avatar from '../../../shared-components/avatar';

export const Footer = () => {
    return (
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.copirate}>
                        <Link to='/'>
                            <Avatar height={"20px"}/>
                        </Link>
                        <p className={style.copirateText}>
                            © 2021. An interactive learning project
                        </p>
                    </div>
                    <div className={style.author}>
                        Developed by <strong>Oleksandr Darchuk</strong>
                    </div>
                </div>
            </footer>
        );
    };