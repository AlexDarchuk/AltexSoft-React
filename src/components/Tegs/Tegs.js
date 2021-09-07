import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../shared-components';
import style from './Tegs.module.css';
import { useDataArticle, useAuth } from '../../hooks';

export const Tegs = ({props, index}) => {
    const { getTagsList } = useDataArticle();
    const {getNameAndCountTag} = useAuth();
    const [countTags, setCountTags] = useState(5);
    const [moreOfLess, setMOreOfLess] = useState('Show more...');

    const getTagName = (tag) => {
        getTagsList(tag);
        index(2)
        getNameAndCountTag({
            tag: tag,
            indexTag: 2
        });
    }
    const showMoreTags = (props) => {
        if (countTags === 5) {
            setCountTags(props.length);
            setMOreOfLess('Show less...');
        } else {
            setCountTags(5);
            setMOreOfLess('Show more...');
        }
        
    }
    

    return(
        <div className={style.tegs}>
            <h6 className={style.title}>Popular Tegs</h6>
            {props.length ? <>
                                    <div className={style.tegBox}>
                                        {
                                             props.slice(0, countTags).map(tag => <Button btnTegs key={uuidv4()} onClick={() => getTagName(tag)}>{tag}</Button>)
                                         }
                                    </div>
                                    <Button btnShowTeg onClick={showMoreTags}>{moreOfLess}</Button>
                                </>
                            : <div>No tags are here yet...</div>
            }
            
        </div>
    )
};

