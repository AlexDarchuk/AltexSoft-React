import React, { useState } from 'react';
import { format } from 'date-fns'
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { Icon, Image, Button, infoToast } from '../../shared-components';
import style from './Posts.module.css'
import {useAuth, useDataArticle, useDataUser} from '../../hooks';
 

export const Posts = ({ props } ) => {
    const {author: {image, username}, createdAt, title, slug, description, favoritesCount, tagList} = props;
    const [countFavorites, setCountFavorites] = useState(favoritesCount);
    const { isSignIn, getSlugListComments, getUserName, loadUserProfile } = useAuth();
    const history = useHistory();
    const { getArticleFavorite, getArticleUser, getFavoriteArticle, getOneArticle} = useDataArticle();
    const { getProfileUser } = useDataUser();

    
    const countPlus = (slug) => {
        setCountFavorites(countFavorites + 1)
        getFavoriteArticle(slug);
    }

    const handlName = (e) => {
        let name = e.target.innerText;
        getProfileUser(name);
        getArticleUser(name);
        getArticleFavorite(name);
        getUserName(name);
        loadUserProfile(false);
        history.push(`/profiles/${name}`);
    }

    const moreAboutArticles = (slug) => {
        history.push(`/articles`);
        getOneArticle(slug);
        getSlugListComments(slug);
    }

    return (
        <div className={style.post}>
            <div className={style.userInfo}>
                <div className={style.name}>
                    <Button btnImg>
                        <Image src={image}/>
                    </Button>
                    <div className={style.created}>
                        <Button dataSlug={slug} btnName onClick={handlName}>
                            {username}
                        </Button>
                        <div className={style.time}>
                        {format(new Date(createdAt),'MMMM dd. yyyy HH:m')}
                        </div>
                    </div>
                </div>
                <Button onClick={() => isSignIn ? countPlus(slug) : infoToast("Authentication required. Please Login")}>
                    <Icon name="heart" width={'14px'} color={'#ab570e'}/>
                    {countFavorites}
                </Button>
                
            </div>
            <div className={style.article}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.text}>{description}</p>
            </div>
            <ul className={style.listTegs}>
                {tagList.map(teg => <li key={uuidv4()} className={style.tegsItem}>#{teg}&nbsp;</li> )}
            </ul>
            <Button btmMore onClick={() => moreAboutArticles(slug)}>
                Read more...
            </Button>
        </div>
    );
};
