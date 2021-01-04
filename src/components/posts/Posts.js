import './Posts.css'
import React, {useEffect} from "react";
import doFetch from "../../services/doFetch";
import {useDispatch, useSelector} from "react-redux";
import {getGlobalPosts} from "../../redux/action-creators";
import Loading from "../../services/Loading";
import Post from "../post/Post";

export default function Posts() {

  const {posts, posts: {articles}} = useSelector(({homePage: {posts}}) => ({posts}))
  const dispatch = useDispatch()

  useEffect(() => {

    doFetch('/api/articles?limit=10&offset=0')
        .then(posts => {
          return dispatch(getGlobalPosts(posts))
        })

  }, [])

  return (
      <div>
        {(!!articles)
            ? articles.map(post => <Post post={post}/>)
            : <Loading/>}
      </div>
  );
}