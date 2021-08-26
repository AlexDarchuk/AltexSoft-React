import React, { useState } from 'react';
import style from './NewArticle.module.css';
import useFormFields from '../../hooks/useFormFields';
import { createArticle } from '../../api/articles';
import { Icon, Button } from '../../shared-components';
import { Spiner } from '../../components';
import { useAuth } from '../../hooks/useAuth';

export const NewArticle = () => {
    const { newArticle } = useAuth();
    const [isSpinerBtn, setSpinerBtn ] = useState(false);
    const { fields, changeFieldValue } = useFormFields({
        title: '',
        description: '',
        body: '',
        tagList: ''
       });

    const handleSubmit = (e) => {
    e.preventDefault();
        createNewArticle({
            title: fields.title,
            description: fields.description,
            body: fields.body,
            tagList: fields.tagList.split(' ')
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
                    <p className={style.input}>
                        Article title
                        <input 
                            name="title" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="Article title"
                            value={fields.title}
                            onChange={changeFieldValue}
                        />   
                    </p>
                    <p className={style.input}>
                        Description
                        <input 
                            name="description" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="What's your article about?"
                            value={fields.description}
                            onChange={changeFieldValue}
                        />
                    </p>
                    <p className={style.input}>
                        Write your article
                        <textarea 
                            name="body" 
                            type="text" 
                            className={style.articleTextArea} 
                            placeholder="Articles"
                            value={fields.password}
                            onChange={changeFieldValue}
                        >
                        </textarea>
                    </p>
                    <p className={style.input}>
                        Enter tags
                        <input 
                            name="tagList" 
                            type="text" 
                            className={style.articleInput} 
                            placeholder="Enter tags"
                            value={fields.tegs}
                            onChange={changeFieldValue}
                        />
                    </p>
                    <div>
                        {
                            isSpinerBtn ? <Spiner newArticleSpiner/> : <Button type='submit' btnCreateArticle>Publish Article</Button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};