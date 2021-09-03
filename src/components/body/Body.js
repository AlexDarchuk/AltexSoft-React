import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { v4 as uuidv4 } from 'uuid';
import {Title} from '../Layout';
import { Main } from '../../pages';
import style from './Body.module.css';
import { Posts } from '../Posts';
import { useAuth } from '../../hooks';

export const Body = () => {
    const {dataFollowUser, dataOneArticle, tagsList} = useAuth();

    console.log(dataFollowUser);

    return (
        <main className={style.body}>
            <Title/>
            <Tabs 
                defaultIndex={1}
                className={style.container}>
                <TabList>
                    <Tab>Your Feeds</Tab>
                    <Tab default={0}>Global Feeds</Tab>
                    <Tab>Tegs</Tab>
                </TabList>

                <TabPanel>
                    {dataOneArticle.length ?
                                            dataOneArticle.map(item => <Posts key={uuidv4()} props={item}/>)
                                           :
                                           <div className={style.noArticles}>No articles are here yet...</div>
                    }
                </TabPanel>
                <TabPanel>
                    <Main/>
                </TabPanel>
                <TabPanel>
                    {tagsList.length ?
                                        tagsList.map(item => <Posts key={uuidv4()} props={item}/>)
                                    :
                                        <div className={style.noArticles}>No articles are here yet...</div>
                        }
                </TabPanel>
            </Tabs>
        </main>
    );
};