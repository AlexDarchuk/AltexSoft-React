import React from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import style from './NewComment.module.css';
import { Image, Button, Icon } from '../../shared-components';
import { useDataArticle, useDataUser, useAuth, useDataComments} from '../../hooks';


export const NewComment = ({props, usrSlug}) => {
    const {author, createdAt, body, id} = props;
    const { getArticleFavorite, getArticleUser} = useDataArticle();
    const { getDeleteComment } = useDataComments();
    const {dataUser} = useAuth();
    const { getProfileUser } = useDataUser();
    const history = useHistory();

    const handlName = (e) => {
        let name = e.target.innerText;
        getProfileUser(name);
        getArticleUser(name);
        getArticleFavorite(name);
        history.push(`/profiles/${name}`);
    }

    const deleteComment = ( slug, id ) => {
        getDeleteComment(slug, id);
    }

    return (
        <div className={style.newComment}>
            <div className={style.userInfo}>
            <div className={style.name}>
                    <div className={style.imageBlock}>
                        {
                            author === undefined ? null : <Image src={author.image}/>
                        }
                    </div>
                    <div className={style.created}>
                        <Button btnName onClick={handlName}>
                            {author.username === undefined ? null : author.username}
                        </Button>
                        <div className={style.time}>
                        {format(new Date(createdAt),'MMMM dd. yyyy HH:m')}
                        </div>
                    </div>
                </div>
                {
                    dataUser.username === author.username ? <Button dataDeleteComment onClick={() => deleteComment(usrSlug, id)}><Icon name="delete" width={'12px'} color={'#fff'}/>Delete</Button> : null
                }
            </div>
            <p className={style.wordBreak}>
                {body}
            </p>
        </div>
    );
};