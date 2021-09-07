import React, {useState, useEffect} from 'react';
import { Field , withFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import style from './AddComment.module.css';
import defaulLogo from '../../static/images/smiley-cyrus.jpg';
import { Image, Button } from '../../shared-components';
import { useAuth, useDataArticle } from '../../hooks';
import { CreateComment } from '../../validationShemas';
import { NewComment } from '../NewComment/NewComment';
import { articlesService } from '../../api/articles';


const AddComment = ( props ) => {
    const { oneArticle, slugListComments, createdNewComment } = useAuth();
    const { createArticleComment } = useDataArticle();
    const [dataComments, setDataComments] = useState([]);
    const { author } = oneArticle;
    const { values, isValid, handleSubmit } = props;


    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
    }

    const getAuthorSlug = (slug) => {
        createArticleComment(slug, values);
    }

    
    useEffect(() => {
        const listComments = async () => {
            try {
                const { comments } = await articlesService.listOfComments(slugListComments);
    
                setDataComments(comments);
            }catch(err) {
                console.error(err)
            }
        }
    
        listComments();
    }, [slugListComments, createdNewComment]);
    
    return (
        <div className={style.comment}>
            <div className={style.commentBlock}>
                <div className={style.commentImg}>
                    {
                        author === undefined ? <img style={{borderRadius: "50%", width: "100%"}} src={defaulLogo} alt={"DefaultLogo"}/> : <Image src={author.image}/>
                    }
                </div>
                <div className={style.inputComment}>
                    <form className={style.commentForm} onSubmit={handleOnSubmit}>
                        <Field as ="textarea" 
                                name="body"
                                type="text" 
                                className={style.commentTextArea} 
                                placeholder="Write your comment"
                            >
                        </Field>
                    </form>
                </div>
            </div>
            <Button type='submit' disabled={!isValid} dataComment={isValid} onClick={() => getAuthorSlug(oneArticle.slug)}>Post Comment</Button>
            {
                dataComments.map((value) => <NewComment key={uuidv4()} props={value} usrSlug={oneArticle.slug}/>)
            }
            
        </div>
    );
};

export default withFormik({
    validationSchema: CreateComment,
    mapPropsToValues: () => ({
        body: "",
    }),
})(AddComment)