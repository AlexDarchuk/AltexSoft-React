import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from './LogIn.module.css';
import { Button } from '../../shared-components'
import useFormFields from '../../hooks/useFormFields';
import  { logInUser } from '../../api/articles';
import { useAuth } from '../../hooks/useAuth';
import { Spiner } from '../../components';

export const LogIn = () => {
    const { signIn, signOut, getToken, getDataUser, } = useAuth();
    const [isSpinerBtn, setSpinerBtn ] = useState(false);
    const { fields, changeFieldValue } = useFormFields({
        email: '',
        password: ''
       });
    
       const handleSubmit = (e) => {
           e.preventDefault();
           registrationUser({
            email: fields.email,
            password: fields.password
           });
           setSpinerBtn(true)
       }

    const registrationUser = async (obj) => {
        try {
          const { user } = await logInUser(obj);
          const { token } = user;

            signIn()
            getToken(token)
            getDataUser(user);
            setSpinerBtn(false)
        } catch(err) {
            console.error(err)
            signOut()
            setSpinerBtn(false)
        }
    }

    return (
        <div className={style.LogInWrapper}>
            <div className={style.logIn}>
            <h3 className={style.title}>Log In</h3>
            <form className={style.form} onSubmit={handleSubmit}>
                <p>
                    <input 
                        name="email" 
                        type="email" 
                        className={style.feedbackInput} 
                        placeholder="Enter email address"
                        value={fields.email}
                        onChange={changeFieldValue}
                    />
                </p>
                <p>
                    <input 
                        name="password" 
                        type="password" 
                        className={style.feedbackInput} 
                        placeholder="Enter your password"
                        value={fields.password}
                        onChange={changeFieldValue}
                    />
                </p>
                <div>
                    {
                        isSpinerBtn ? <Spiner logInSpiner/> : <Button type='submit' btnLogIn>Log In</Button>
                    }
                </div>
            </form>
            <p className={style.creatLink}>
                Don’t have an account yet ? <Link className={style.logInLink} to="register"> Create an account</Link>
            </p>
        </div>
        </div>
    );
};