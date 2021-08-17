import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../shared-components';
import style from './Tegs.module.css';

export const Tegs = ({props}) => {
    return(
        <div className={style.tegs}>
            <h6 className={style.title}>Popular Tegs</h6>
            {props.length ? <>
                                    <div className={style.tegBox}>
                                        {
                                             props.map(teg => <Button btnTegs key={uuidv4()}>{teg}</Button>)
                                         }
                                    </div>
                                    <Button btnShowTeg>Show more...</Button>
                                </>
                            : <div>No tags are here yet...</div>
            }
            
        </div>
    )
};

