import React, { useState } from 'react';
import style from './SignUp.module.css';
import { Field , withFormik } from 'formik'
import { Link } from "react-router-dom";
import { Button } from '../../shared-components';
import { createUser } from '../../api/articles';
import { useAuth } from '../../hooks/useAuth';
import { Spiner } from '../../components';
import { SignUpShema} from '../../validationShemas';
import { ErrorMessage } from '../../errors';

const SignUp = ( props ) => {
    const { values, isValid } = props;
    const { signIn, signOut, getDataUser, } = useAuth();
    const [isSpinerBtn, setSpinerBtn ] = useState(false);;

    const handleSubmit = (e) => {
        e.preventDefault();
        create( values );
        setSpinerBtn(true)
    }

    const create = async (obj) => {
        try {
            const{ user } = await createUser(obj);

            signIn();
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
                    <label className={style.input}>
                        <Field 
                            name="username" 
                            type="text" 
                            className={style.feedbackInput} 
                            placeholder="Enter your username"
                        />
                    </label>
                    <ErrorMessage name="username"/>
                    <label className={style.input}>
                        <Field 
                            name="email" 
                            type="email" 
                            className={style.feedbackInput} 
                            placeholder="Enter email address"
                        />
                    </label>
                    <ErrorMessage name="email"/>
                    <label className={style.input}>
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
                            isSpinerBtn ? <Spiner signupSpiner/> : <Button type='submit' disabled={!isValid} btnSignUp={isValid}>Sign Up</Button>
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

export default withFormik({
    validationSchema: SignUpShema,
    mapPropsToValues: ({inatialValues}) => ({
        username: "",
        email: "",
        password: ""
    }),
})(SignUp)