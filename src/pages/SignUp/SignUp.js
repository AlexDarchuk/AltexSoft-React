import React, { useState } from 'react';
import style from './SignUp.module.css';
import { Link } from "react-router-dom";
import { Button } from '../../shared-components';
import useFormFields from '../../hooks/useFormFields';
import { createUser } from '../../api/articles';
import { useAuth } from '../../hooks/useAuth';
import { Spiner } from '../../components';

export const SignUp = () => {
   const { signIn, signOut, getToken, getDataUser, } = useAuth();
   const [isSpinerBtn, setSpinerBtn ] = useState(false);
   const { fields, changeFieldValue } = useFormFields({
    username: '',
    email: '',
    password: '',
   });

   const handleSubmit = (e) => {
       e.preventDefault();
       create({
        username: fields.username,
        email: fields.email,
        password: fields.password
       });
       setSpinerBtn(true)
   }

   const create = async (obj) => {
       try {
           const{ user } = await createUser(obj);
           const { token } = user;

            signIn()
            getToken(token)
            getDataUser(user);
            setSpinerBtn(false)
       } catch(err) {
           console.error(err);
           signOut()
           setSpinerBtn(false)
       } 
   }


    return (
        <div className={style.signUpWraper}>
            <div className={style.signUp}>
                <h3 className={style.title}>Sign Up</h3>
                <form className={style.form} onSubmit={handleSubmit}>
                    <p className={style.input}>
                        <input 
                            name="username" 
                            type="text" 
                            className={style.feedbackInput} 
                            placeholder="Enter your username"
                            value={fields.username}
                            onChange={changeFieldValue}
                            />
                            
                    </p>
                    <p className={style.input}>
                        <input 
                            name="email" 
                            type="email" 
                            className={style.feedbackInput} 
                            placeholder="Enter email address"
                            value={fields.email}
                            onChange={changeFieldValue}
                            />
                    </p>
                    <p className={style.input}>
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
                            isSpinerBtn ? <Spiner signupSpiner/> : <Button type='submit' btnSignUp>Sign Up</Button>
                        }
                        
                    </div>
                </form>
                <p className={style.creatLink}>
                    Already a member ? <Link className={style.signUpLink} to="login"> Log In</Link>
                </p>
            </div>
        </div>
    );
};