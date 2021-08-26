import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { Icon, Image, Button } from '../../shared-components';
import { Article } from '..';
import style from './Posts.module.css'
import { PostTags } from '../PostTegs';
import './Posts.css';
import {useAuth} from '../../hooks/useAuth';



export const Posts = ({ props } ) => {
    const {author: {image, username}, createdAt, title, description, favoritesCount, tagList} = props;
    const [countFavorites, setCountFavorites] = useState(favoritesCount);
    const { isSignIn } = useAuth();

    const infoToast = () => {
        toast("Authentication required. Please Login", {
            className: 'test-toast',
            autoClose: 7000,
            hideProgressBar: false,
            position: toast.POSITION.TOP_RIGHT
        });
    }
    
    const countPlus = () => {
        setCountFavorites(countFavorites + 1)
    }

    return (
        <div className={style.post}>
            <div className={style.userInfo}>
                <div className={style.name}>
                    <Button btnImg>
                        <Image src={image}/>
                    </Button>
                    <div className={style.created}>
                        <Button btnName >
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
