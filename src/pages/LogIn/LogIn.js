import React from 'react';
import { Link } from "react-router-dom";
import style from './LogIn.module.css';
import { Button } from '../../shared-components'

export const LogIn = () => {
    return (
        <div className={style.LogInWrapper}>
            <div className={style.logIn}>
            <h3 className={style.title}>Log In</h3>
            <form className={style.form}>
                <p className={style.email}>
                    <input name="email" type="email" className={style.feedbackInput} placeholder="Enter email address"/>
                </p>
                <p className="name">
                    <input name="name" type="password" className={style.feedbackInput} placeholder="Enter your password"/>
                </p>
                <div className="submit">
                    <Button btnLogIn>Log In</Button>
                </div>
            </form>
            <p className={style.creatLink}>
                Don’t have an account yet ? <Link className={style.logInLink} to="register"> Create an account</Link>
            </p>
        </div>
        </div>
    );
};