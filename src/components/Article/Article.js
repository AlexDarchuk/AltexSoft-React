import React, {useState} from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import style from './Article.module.css';
import defaulLogo from '../../static/images/smiley-cyrus.jpg';
import { Button, Image, Icon, infoToast} from '../../shared-components';
import { useAuth,  useDataArticle, useDataUser} from '../../hooks';

export const Article = ({props}) => {
    const { isSignIn, dataUser, isDeleteArticle, getNameModalNewArticle } = useAuth();
    const {author, slug, title, description, createdAt, favoritesCount, tagList} = props;
    const [countFavorites, setCountFavorites] = useState(favoritesCount);
    const { getArticleFavorite, getArticleUser, getFavoriteArticle, getDeleteArticle } = useDataArticle();
    const { getProfileUser } = useDataUser();

    const history = useHistory();

    const handlName = (e) => {
        let name = e.target.innerText;
        getProfileUser(name);
        getArticleUser(name);
        getArticleFavorite(name);
        history.push(`/profiles/${name}`);
    }
    
    const countPlus = (slug) => {
        setCountFavorites(countFavorites + 1)
        getFavoriteArticle(slug);
    }

    const deleteArticle = (slug) => {
        getDeleteArticle(slug);
    }

    const showModalArticle = () => {
        const modalArticle = document.getElementById('modalArticle');
        getNameModalNewArticle('Edit Article');
        modalArticle.style.display = 'block';
    }

    return (
        <div className={style.articleBlock}>
            <div className={style.userInfo}>
                <div className={style.name}>
                    <Button btnImg >
                        {
                            author.image ? <Image src={author.image}/> : <img style={{borderRadius: "50%"}} src={defaulLogo} alt={"DefaultLogo"}/>
                        }
                    </Button>
                    <div className={style.created}>
                        <Button dataSlug={slug} btnName onClick={handlName}>
                            {author.username}
                        </Button>
                        <div className={style.time}>
                            {format(new Date(createdAt),'MMMM dd. yyyy HH:m')}
                        </div>
                    </div>
                </div>
                {
                    dataUser.username === author.username ? 
                                                            <div className={style.editAndDeleteBtn}>
                                                                <Button dataEditArticle onClick={showModalArticle}>Edit Article</Button>
                                                                <Button dataDeleteComment onClick={() => deleteArticle(slug)}><Icon name="delete" width={'12px'} color={'#fff'}/>Delete</Button>
                                                                {
                                                                    isDeleteArticle ? <Redirect to='/profile'/> : null
                                                                }
                                                            </div>
                                                          : 
                                                            <Button onClick={() => isSignIn ? countPlus(slug) : infoToast}>
                                                                <Icon name="heart" width={'14px'} color={'#ab570e'}/>
                                                                {countFavorites}
                                                            </Button>
                }
            </div>
            <div className={style.article}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.text}>{description}</p>
            </div>
            <ul className={style.listTegs}>
                {tagList.map(teg => <li key={uuidv4()} className={style.tegsItem}>#{teg}&nbsp;</li>)}
            </ul>
        </div>
    );
};