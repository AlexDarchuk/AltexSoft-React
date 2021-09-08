import React from 'react';
import { format } from 'date-fns'
import { Link } from "react-router-dom";
import style from './Footer.module.css';
import { Logo } from '../../../shared-components';

export const Footer = () => {
    return (
            <footer className={style.footer}>
                <div className={style.footerContainer}>
                    <div className={style.copirate}>
                        <Link to='/'>
                            <Logo height={"20px"}/>
                        </Link>
                        <p className={style.copirateText}>
                            © {format(new Date(), 'yyyy')}. An interactive learning project
                        </p>
                    </div>
                    <div className={style.author}>
                        Developed by <strong>Oleksandr Darchuk</strong>
                    </div>
                </div>
            </footer>
        );
    };