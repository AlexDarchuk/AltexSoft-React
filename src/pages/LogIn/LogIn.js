import React, { useState } from 'react';
import { Field , withFormik } from 'formik'
import { Link } from "react-router-dom";
import style from './LogIn.module.css';
import { Button } from '../../shared-components';
import  { logInUser } from '../../api/articles';
import { useAuth, useDataArticle } from '../../hooks';
import { Spiner } from '../../components';
import { LoginShema } from '../../validationShemas';
import { ErrorMessage } from '../../errors';

const LogIn = ( props ) => {
    const { values, isValid } = props;
    const { signIn, signOut, getDataUser } = useAuth();
    const [isSpinerBtn, setSpinerBtn ] = useState(false);
    const { getArticleFavorite, getArticleUser} = useDataArticle();

    const handleSubmit = (e) => {
        e.preventDefault();
        registrationUser(values);
        setSpinerBtn(true);
    }
       
    const registrationUser = async (obj) => {
        try {
          const { user } = await logInUser(obj);

            signIn();
            getDataUser(user);
            getArticleUser(user.username)
            getArticleFavorite(user.username)
            setSpinerBtn(false);
        } catch(err) {
            console.error(err)
            signOut();
            setSpinerBtn(false);
        }
    }

    return (
        <div className={style.LogInWrapper}>
            <div className={style.logIn}>
            <h3 className={style.title}>Log In</h3>
            <form className={style.form} onSubmit={handleSubmit}>
                <label>
                    Email
                    <Field 
                        name="email" 
                        type="email"
                        className={style.feedbackInput} 
                        placeholder="Enter email address"
                    />
                </label>
                <ErrorMessage name="email"/>
                <label>
                    Password
                    <Field 
                        name="password" 
                        type="password" 
                        className={style.feedbackInput} 
                        placeholder="Enter your password"
                    />
                </label>
                <ErrorMessage name="password"/>
                <div>
                    {
                        isSpinerBtn ? <Spiner logInSpiner/> : <Button type='submit' disabled={!isValid} btnLogIn={isValid}>Log In</Button>
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

export default withFormik({
    validationSchema: LoginShema,
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
})(LogIn)