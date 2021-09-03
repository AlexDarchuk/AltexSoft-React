import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { v4 as uuidv4 } from 'uuid';
import style from './Profiles.module.css';
import defaulLogo from '../../static/images/smiley-cyrus.jpg';
import { useAuth } from '../../hooks';
import { Image, Button } from '../../shared-components';
import { Posts } from '../../components';
import { useDataUser } from '../../hooks';

export const Profiles = () => {
    const { dataProfile, dataOneArticle, dataFavoriteArticle } = useAuth();
    const { image, bio, username } =dataProfile;
    const { getFollowUser, getUnFollowUser } = useDataUser();

    const userNameForFollow = (username) => {
        getFollowUser(username);
    }

    const userNameUnForFollow = (username) => {
        getUnFollowUser(username)
    }

    return (
        <div className={style.profile}>
            <div className={style.profileBox}>
                <div className={style.profileChange}>
                    <div className={style.imageBlock}>
                        {
                            image ? <Image src={image}/> : <img style={{borderRadius: "50%"}} src={defaulLogo} alt={"DefaultLogo"}/>
                        }
                                        
                    </div>
                        <div className={style.followBtn}>
                        <Button btnEditProfile onClick={()=> userNameForFollow(username)}>Follow</Button>
                        <Button btnEditProfile onClick={()=> userNameUnForFollow(username)}>UnFollow</Button>
                        </div>
                </div>
                <div className={style.profileName}>
                    <p className={style.name}>{username}</p>
                    <p className={style.bio}>
                        {bio ? bio : <>No biography is here yet...</>}
                    </p>
                </div>
            </div>
            <div className={style.profilesTabs}>
                <Tabs>
                    <TabList>
                        <Tab>My Posts</Tab>
                        <Tab>Favorited Posts</Tab>
                    </TabList>

                    <TabPanel>
                        {dataOneArticle.length
                            ?
                            dataOneArticle.map(value => <Posts key={uuidv4()} props={value}/>)
                            :
                            <div className={style.noArticles}>No articles are here yet...</div>
                        }
                    </TabPanel>
                    <TabPanel>
                        {dataFavoriteArticle.length
                            ?
                            dataFavoriteArticle.map(value => <Posts key={uuidv4()} props={value}/>)
                            :
                            <div className={style.noArticles}>No articles are here yet...</div>
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};