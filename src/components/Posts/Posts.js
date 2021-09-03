import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { Icon, Image, Button, infoToast } from '../../shared-components';
import { Article } from '..';
import { profileUser } from '../../api/articles';
import style from './Posts.module.css'
import { PostTags } from '../PostTegs';
import {useAuth, useDataArticle} from '../../hooks';
 

export const Posts = ({ props } ) => {
    const {author: {image, username}, createdAt, title, slug, description, favoritesCount, tagList} = props;
    const [countFavorites, setCountFavorites] = useState(favoritesCount);
    const { isSignIn, getDataProfileUser } = useAuth();
    const history = useHistory();
    const { getArticleFavorite, getArticleUser} = useDataArticle();

    
    const countPlus = () => {
        setCountFavorites(countFavorites + 1)
    }

    const getProfileUser = async (name) => {
        try{
            const { profile } = await profileUser(name);

            getDataProfileUser(profile);
        } catch(err) {
            console.error(err);
        }
    }
    const handlName = (e) => {
        let name = e.target.innerText;
        getProfileUser(name);
        getArticleUser(name);
        getArticleFavorite(name);
        history.push(`/profiles/${name}`);
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
                            {createdAt}
                        </div>
                    </div>
                </div>
                <Button onClick={isSignIn ? countPlus : infoToast}>
                    <Icon name="heart" width={'14px'} color={'#ab570e'}/>
                    {countFavorites}
                </Button>
                
            </div>
                <Article title={title} description={description}/>
            <ul className={style.listTegs}>
                {tagList.map(teg => <PostTags key={uuidv4()} teg={teg}/>)}
            </ul>
            <Button btmMore>
                Read more...
            </Button>
        </div>
    );
};
