import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import { Posts } from '../Posts';
import {Spiner} from '../Spiner';
import style from './PostsList.module.css';

export const PostsList = ({items, isLoading}) => {
    return (
            <div className={style.postList}>
                <ul className={style.listNavigation}>
                    <li className={style.listPoint}>
                        <NavLink to="personalfeeds"
                            activeStyle={{
                            }}
                            className={style.postMenu}
                            >
                            Your Feeds
                        </NavLink>
                    </li>
                    <li className={`${style.listPoint} ${style.listActive}`}>
                        <NavLink to="allfeeds"
                            activeStyle={{
                                fontWeight: "bold",
                                textDecoration: 'none',
                                color: '#351d08',
                            }}
                            className={style.postMenu}
                            >
                            Global Feeds
                        </NavLink>
                    </li>
                </ul>
                {
                isLoading 
                    ? <Spiner /> 
                    : <>
                        {
                        items.length 
                                    ? items.map(item => <Posts key={uuidv4()} props={item} />)

                                    : <div className={style.noArticles}>No articles are here yet...</div>
                        }
                      </>
                }
        </div>
    );
}

export default PostsList;