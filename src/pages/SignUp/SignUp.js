import React from 'react';
import style from './SignUp.module.css';
import { Link } from "react-router-dom";
import { Button } from '../../shared-components'

export const SignUp = () => {
    return (
        <div className={style.signUpWraper}>
            <div className={style.signUp}>
                <h3 className={style.title}>Sign Up</h3>
                <form className={style.form}>
                <p className={style.email}>
                        <input name="email" type="text" className={style.feedbackInput} placeholder="Enter your username"/>
                    </p>
                    <p className={style.email}>
                        <input name="email" type="email" className={style.feedbackInput} placeholder="Enter email address"/>
                    </p>
                    <p className="name">
                        <input name="name" type="password" className={style.feedbackInput} placeholder="Enter your password"/>
                    </p>
                    <div className="submit">
                        <Button btnSignUp>Sign Up</Button>
                    </div>
                </form>
                <p className={style.creatLink}>
                    Already a member ? <Link className={style.signUpLink} to="login"> Log In</Link>
                </p>
            </div>
        </div>
    );
};