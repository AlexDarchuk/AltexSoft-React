import React, {useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import { PostsList, TegList } from '../../components';
import style from './Main.module.css';
import { articlesService } from '../../api/articles';
import { useAuth } from '../../hooks/useAuth';

export const Main = () => {
  const { isNewArticle } = useAuth();
  const [article, setArticle] = useState([]);
  const [tag, setTag] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isLoadingTeg, setIsLoadingTeg] = useState(null);

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

  const fetchTegs = async () => {
    try {
      setIsLoadingTeg(true)
     const { tags } = await articlesService.getAllTags();

     setTag(tags);
    } catch(err) {
      console.error(err)
    } finally {
      setIsLoadingTeg(false)
    }
 }
    
  useEffect(() => {
    fetchArticles();
    fetchTegs();
    
  },[isNewArticle])
  
    return (
        <div className={`${style.main} ${style.container}`}>
          <PostsList items = {article} isLoading={isLoading}/>
          <TegList items = {tag} isLoading={isLoadingTeg}/>
          <ToastContainer/>
        </div>
    )
};