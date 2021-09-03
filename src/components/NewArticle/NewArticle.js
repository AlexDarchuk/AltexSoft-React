import React, { useState } from 'react';
import style from './NewArticle.module.css';
import { Field , withFormik} from 'formik';
import { createArticle } from '../../api/articles';
import { Icon, Button } from '../../shared-components';
import { Spiner } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { NewArticleShema} from '../../validationShemas';

const NewArticle = ( props ) => {
    const { values, isValid } = props;
    const { newArticle } = useAuth();
    const [isSpinerBtn, setSpinerBtn ] = useState(false);

    console.log(values);
    const handleSubmit = (e) => {
    e.preventDefault();
        createNewArticle({
            title: values.title,
            description: values.description,
            body: values.body,
            tagList: values.tagList.split(' ')
        });
        setSpinerBtn(true);
    }

    const createNewArticle = async (obj) => {
        console.log(obj);
        try {
           const {article} = await createArticle(obj);
           
           newArticle();
           console.log(article);
           setSpinerBtn(false);
        } catch(err) {
            console.error(err);
            setSpinerBtn(false);
        } 
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
                <h3 className={style.title}>New Article</h3>
                <form className={style.form} onSubmit={handleSubmit}>
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
                            isSpinerBtn ? <Spiner newArticleSpiner/> : <Button type='submit' disabled={!isValid} btnCreateArticle={isValid}>Publish Article</Button>
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