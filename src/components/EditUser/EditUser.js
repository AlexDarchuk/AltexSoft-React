import React from 'react';
import style from './EditUser.module.css';
import { Field , withFormik} from 'formik';
import { updateProfile } from '../../api/articles';
import { Icon, Button } from '../../shared-components';
import { useAuth } from '../../hooks/useAuth';
import { UpdateUserShema } from '../../validationShemas';
import { ErrorMessage } from '../../errors';

const DEFAULT_VALUES = {
    image: "",
    username: "",
    bio: "",
    email: "",
    password: "",
  };

const EditUser = ( props ) => {
    const { values, isValid } = props;
    const modalArticle = document.getElementById('modalEdit');
    const { updateUser, getDataUser } = useAuth();

    const handleSubmit = (e) => {
    e.preventDefault();
        updateProfileUser( values )
    }

    const updateProfileUser = async (obj) => {
        try {
           const { user } = await updateProfile(obj);
           
           updateUser(true);
           getDataUser(user);
        } catch(err) {
            console.error(err);
            updateUser(true);
        }
    }

    const closeModal = () => {
        modalArticle.style.display = 'none';
        updateUser(false);
    }

    const closeModalSvg = () => {
        modalArticle.style.display = 'none';
    }


    return (
        <div id='modalEdit' className={style.modalEditUser}>
             <div className={style.modalBlock}>
                <Button type='button' btnClose onClick={closeModalSvg}>
                    <Icon name="close" width={'17px'} color={'rgb(61, 72, 73)'}/>
                </Button>
                <h3 className={style.title}>Profile info</h3>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label className={style.input}>
                        Picture
                        <Field 
                            name="image" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="Profile picture URL"
                        />   
                    </label>
                    <label className={style.input}>
                        Username
                        <Field 
                            name="username"
                            type="text" 
                            className={style.articleInput} 
                            placeholder="Username"
                        />
                    </label>
                    <ErrorMessage name="username"/>
                    <label className={style.input}>
                        Biography
                        <Field as="textarea" 
                            name="bio" 
                            type="text" 
                            className={style.articleTextArea} 
                            placeholder="Short biography"
                        >
                        </Field>
                    </label>
                    <label className={style.input}>
                        Email
                        <Field 
                            name="email" 
                            type="email" 
                            className={style.articleInput} 
                            placeholder="Enter your email"
                        />
                    </label>
                    <ErrorMessage name="email"/>
                    <label className={style.input}>
                        Confirm password or enter new
                        <Field 
                            name="password" 
                            type="password" 
                            className={style.articleInput} 
                            placeholder="Enter your password"
                        />
                    </label>
                    <ErrorMessage name="password"/>
                    <div>
                         <Button type='submit' disabled={!isValid} btnCreateArticle={isValid} onClick={closeModal}>Edit User</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withFormik({
    validationSchema: UpdateUserShema,
    mapPropsToValues: ({initialValues}) => 
        initialValues ? initialValues : DEFAULT_VALUES
})(EditUser)