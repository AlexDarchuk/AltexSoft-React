import React, {useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { v4 as uuidv4 } from 'uuid';
import style from './Profile.module.css';
import defaulLogo from '../../static/images/smiley-cyrus.jpg';
import { Image, Button } from '../../shared-components';
import { Spiner, Posts } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { useDataUser } from '../../hooks';

export const Profile = () => {
    const { dataUser, isUpdateUser,dataOneArticle, dataFavoriteArticle } = useAuth();
    const { username, image, bio, } = dataUser;
    // const { getFollowUser, getUnFollowUser } = useDataUser();


    // getFollowUser(username);
    // getUnFollowUser(username);

    const showModalEditUser = () => {
        const modalEdit = document.getElementById('modalEdit');
        modalEdit.style.display = 'block';
    }
   
    return (
        <div className={style.profile}>
            {
                isUpdateUser ? <div className={style.profileBox}>
                                <div className={style.profileChange}>
                                    <div className={style.imageBlock}>
                                        {
                                            image ? <Image src={image}/> : <img style={{borderRadius: "50%"}} src={defaulLogo} alt={"DefaultLogo"}/>
                                        }
                                        
                                    </div>
                                    <Button btnEditProfile onClick={showModalEditUser}>Edit Profile</Button>
                                </div>
                                <div className={style.profileName}>
                                    <p className={style.name}>{username}</p>
                                    <p className={style.bio}>
                                        {bio ? bio : <>No biography is here yet...</>}
                                    </p>
                                </div>
                            </div>
                            : <Spiner profileSpiner/>
            }
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
    );
};