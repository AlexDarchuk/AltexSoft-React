import React, { useState } from 'react';
import style from './NewArticle.module.css';
import { Field , withFormik} from 'formik';
import { createArticle } from '../../api/articles';
import { Icon, Button } from '../../shared-components';
import { Spiner } from '../../components';
import { useAuth, useDataArticle } from '../../hooks';
import { NewArticleShema} from '../../validationShemas';

const NewArticle = ( props ) => {
    const { values, isValid, handleSubmit } = props;
    const { newArticle, nameModalNewAticle, slugListComments } = useAuth();
    const { getUpdateArticle } = useDataArticle();
    const [isSpinerBtn, setSpinerBtn ] = useState(false);


    const handleOnSubmit = () => {
        createNewArticle({
            title: values.title,
            description: values.description,
            body: values.body,
            tagList: values.tagList.split(' ')
        });
        setSpinerBtn(true);
        handleSubmit()
    }

    const createNewArticle = async (obj) => {
        try {
           await createArticle(obj);
           
           newArticle();
           setSpinerBtn(false);
        } catch(err) {
            console.error(err);
            setSpinerBtn(false);
        } 
    }

    const articleUpdate = (slug,) => {
        getUpdateArticle(slug, {
            title: values.title,
            description: values.description,
            body: values.body,
            tagList: values.tagList.split(' ')
        });
        handleSubmit();
    }

    

    const closeModal = () => {
        const modalArticle = document.getElementById('modalArticle');
        modalArticle.style.display = 'none';
    }


    return (
        <div id='modalArticle' className={style.modalArticle}>
             <div className={style.modalBlock}>
                <Button btnClose onClick={closeModal}>
                    <Icon name="close" width={'17px'} color={'rgb(61, 72, 73)'}/>
                </Button>
                <h3 id='modalTitle' className={style.title}>{nameModalNewAticle}</h3>
                <form className={style.form} >
                    <label className={style.input}>
                        Article title
                        <Field 
                            name="title" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="Article title"
                        />   
                    </label>
                    <label className={style.input}>
                        Description
                        <Field 
                            name="description" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="What's your article about?"
                        />
                    </label>
                    <label className={style.input}>
                        Write your article
                        <Field as ="textarea" 
                            name="body" 
                            type="text" 
                            className={style.articleTextArea} 
                            placeholder="Articles"
                        >
                        </Field>
                    </label>
                    <label className={style.input}>
                        Enter tags
                        <Field 
                            name="tagList" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="Enter tags"
                        />
                    </label>
                    <div>
                        {
                            isSpinerBtn ? <Spiner newArticleSpiner/> : <>
                                                                            {
                                                                                nameModalNewAticle === 'New Article' ? <Button type='button' disabled={!isValid} btnCreateArticle={isValid} onClick={handleOnSubmit}>Publish Article</Button>
                                                                                                                     : <Button type='button' disabled={!isValid} btnCreateArticle={isValid} onClick={() => articleUpdate(slugListComments)}>Update Article</Button>
                                                                            }
                                                                        </>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withFormik({
    validationSchema: NewArticleShema,
    mapPropsToValues: () => ({
        title: '',
        description: '',
        body: '',
        tagList: ''
    }),
})(NewArticle)