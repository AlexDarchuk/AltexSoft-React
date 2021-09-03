import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'react-tabs/style/react-tabs.css';
import { Posts, Spiner } from '../../components'
import style from './PostsList.module.css';

export const PostsList = ({items, isLoading}) => {
    return (
            <div className={style.postList}>
                {
                isLoading 
                    ? <Spiner /> 
                    : <>
                        {items.length ? <>
                                        {items.map(item => <Posts key={uuidv4()} props={item}/>)}
                                        
                                        </>
                                      : 
                                        <div className={style.noArticles}>No articles are here yet...</div>
                        }
                      </>
                }
        </div>
    );
}

export default PostsList;