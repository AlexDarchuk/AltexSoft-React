import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { v4 as uuidv4 } from 'uuid';
import style from './Profiles.module.css';
import defaulLogo from '../../static/images/smiley-cyrus.jpg';
import { useAuth, useDataUser, usePagination } from '../../hooks';
import { Image, Button } from '../../shared-components';
import { Posts, Spiner, Pagination } from '../../components';

export const Profiles = () => {
    const { dataProfile, dataOneArticle, dataFavoriteArticle, isSignIn, followingUser } = useAuth();
    const { image, bio, username } =dataProfile;
    const { getFollowUser, getUnFollowUser } = useDataUser();
    const {getCurrentPosts, setPage} = usePagination();

    const userNameForFollow = (username) => {
        getFollowUser(username);
    }

    const userNameUnForFollow = (username) => {
        getUnFollowUser(username)
    }

    return (
        <div className={style.profile}>
            {
                dataProfile ? <div className={style.profileBox}>
                <div className={style.profileChange}>
                    <div className={style.imageBlock}>
                        {
                            image ? <Image src={image}/> : <img style={{borderRadius: "50%"}} src={defaulLogo} alt={"DefaultLogo"}/>
                        }
                                        
                    </div>
                        <div className={style.followBtn}>
                            {
                                isSignIn ?<>
                                            {
                                                followingUser ? <Button btnEditProfile onClick={()=> userNameUnForFollow(username)}>UnFollow</Button>
                                                          : <Button btnEditProfile onClick={()=> userNameForFollow(username)}>Follow</Button>
                                            }
                                          </>
                                        : null
                            }
                            
                        </div>
                </div>
                <div className={style.profileName}>
                    <p className={style.name}>{username}</p>
                    <p className={style.bio}>
                        {bio ? bio : <>No biography is here yet...</>}
                    </p>
                </div>
            </div>
            : <Spiner/>
            }
            
            <div className={style.profilesTabs}>
                <Tabs>
                    <TabList>
                        <Tab>My Posts</Tab>
                        <Tab>Favorited Posts</Tab>
                    </TabList>

                    <TabPanel>
                        {dataOneArticle.length
                            ?
                            <>
                            {getCurrentPosts(dataOneArticle).map(value => <Posts key={uuidv4()} props={value}/>)}
                            <>
                            {
                                dataOneArticle.length < 11 ? null : <Pagination articles={dataOneArticle} setPage={setPage}/>
                            }
                            </>
                            
                            </>
                            :
                            <div className={style.noArticles}>No articles are here yet...</div>
                        }
                    </TabPanel>
                    <TabPanel>
                        {dataFavoriteArticle.length
                            ?
                            <>
                            {getCurrentPosts(dataFavoriteArticle).map(value => <Posts key={uuidv4()} props={value}/>)}
                            <>
                            {
                                dataFavoriteArticle.length < 11 ? null : <Pagination articles={dataOneArticle} setPage={setPage}/>
                            }
                            </>
                            </>
                            :
                            <div className={style.noArticles}>No articles are here yet...</div>
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};