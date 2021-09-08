import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { v4 as uuidv4 } from 'uuid';
import style from './Body.module.css';
import { useAuth, usePagination } from '../../hooks';
import { articlesService } from '../../api/articles';
import { Spiner, Pagination, Posts, TagList, Hero } from '../../components';


export const Body = () => {
    const { tagsList, nameAndCountTag, isNewArticle, isSignIn, isTagsLOading} = useAuth();
    const [tag, setTag] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [article, setArticle] = useState([]);
    const [feedArticle, setFeedArticle] = useState([]);
    const [feedCount, setFeedCount] = useState(0);
    const [isLoadingTeg, setIsLoadingTeg] = useState(null);
    const [numberTag, setNumberTag] = useState(1);
    const [loadingFeedArticle, setLoadingFeedArticle] = useState(false)
    const {getCurrentPosts, setPage} = usePagination();

    const fetchTegs = async () => {
        try {
          setIsLoadingTeg(true)
         const { tags } = await articlesService.getAllTags();
    
         setTag(tags);
        } catch(err) {
          console.error(err)
          setLoadingFeedArticle(false)
        } finally {
          setIsLoadingTeg(false);
        }
     }

     const fetchArticles = async () => {
        try {
         setIsLoading(true)
         const { articles } = await articlesService.getAllArticles();
         
         setArticle(articles);
        } catch(err) {
          console.error(err)
          setIsLoading(false)
        } finally {
          setIsLoading(false)
        }
     }

     const feedArticles = async (feedCount) => {
         try {
             const { articles, articlesCount } = await articlesService.myFeedArticle(feedCount);

             setLoadingFeedArticle(true);
             setFeedArticle(articles);
             setFeedCount(articlesCount);
         } catch(err) {
             console.error(err);
             setLoadingFeedArticle(false);
         }
     }

    useEffect(() => {
        fetchTegs();
        fetchArticles();
    },[isNewArticle]);

    useEffect(() => {
        if(isSignIn){
            feedArticles(feedCount);
        }  
    },[feedCount, isSignIn]);

    return (
        <div className={style.main}>
            <Hero/>
            <div className={style.bodyContainer}>
            <main className={style.body}>
                <Tabs 
                    selectedIndex={numberTag}
                    onSelect = {(index) => {
                        setNumberTag(index)
                    }} 
                    className={style.container}>
                    <TabList>
                        <Tab>Your Feeds</Tab>
                        <Tab>Global Feeds</Tab>
                        {
                            nameAndCountTag.name.tag ? <Tab>{'#' + nameAndCountTag.name.tag}</Tab> : null
                        }
                    </TabList>
                    

                    <TabPanel>
                        { isSignIn ? 
                            <> 
                                {
                                    !loadingFeedArticle ? 
                                        <Spiner/> 
                                            :
                                                <> 
                                                    {feedArticle.length ? getCurrentPosts(feedArticle).map(item => <Posts key={uuidv4()} props={item}/>) : <div className={style.noArticles}>No articles are here yet...</div>}
                                                    <Pagination articles={feedArticle} setPage={setPage}/>
                                                </>
                                            }
                                        </>         
                                    : <Redirect to='/login'/>
                        }
                    </TabPanel>
                    <TabPanel>
                        { isLoading ? 
                            <Spiner /> 
                                : 
                                    <>
                                        {article.length ? getCurrentPosts(article).map(item => <Posts key={uuidv4()} props={item}/>) : <div className={style.noArticles}>No articles are here yet...</div>}
                                        <Pagination articles={article} setPage={setPage}/>
                                    </>
                                }
                    </TabPanel>
                        { numberTag === 2 ? 
                            <TabPanel>
                                {!isTagsLOading ?
                                    <Spiner/> : 
                                        <>
                                            {tagsList.length ? getCurrentPosts(tagsList).map(item => <Posts key={uuidv4()} props={item}/>) : <div className={style.noArticles}>No articles are here yet...</div>}
                                            <Pagination articles={tagsList} setPage={setPage}/>
                                        </>
                                        }
                                            
                    </TabPanel>
                    : null
                    }
                    
                </Tabs>
            </main>
                <TagList items = {tag} isLoading={isLoadingTeg} chanhgIndex={setNumberTag}/>
            </div>
        </div>
    );
};