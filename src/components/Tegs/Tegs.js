import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../shared-components';
import style from './Tegs.module.css';
import { useDataArticle } from '../../hooks';

export const Tegs = ({props}) => {
    const { getTagsList } = useDataArticle();

    const getTegName = (tag) => {
        console.log(tag);
        getTagsList(tag)
    }


    return(
        <div className={style.tegs}>
            <h6 className={style.title}>Popular Tegs</h6>
            {props.length ? <>
                                    <div className={style.tegBox}>
                                        {
                                             props.map(tag => <Button btnTegs key={uuidv4()} onClick={() => getTegName(tag)}>{tag}</Button>)
                                         }
                                    </div>
                                    <Button btnShowTeg>Show more...</Button>
                                </>
                            : <div>No tags are here yet...</div>
            }
            
        </div>
    )
};

