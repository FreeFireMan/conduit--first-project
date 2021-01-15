import './Posts.css'
import React, {useEffect} from "react";
import doFetch from "../../services/doFetch";
import {useDispatch, useSelector} from "react-redux";
import {getGlobalPosts} from "../../redux/action-creators";
import Loading from "../../services/Loading";
import Post from "../post/Post";
import {withRouter} from "react-router-dom";

function Posts({match:{params:{numberPage}}}) {

  const {articles} = useSelector(({post: {posts}}) => posts)
      const dispatch = useDispatch();

  useEffect(() => {
    let url = '/api/articles?limit=10&offset=0'
    if(numberPage) {
      url = `/api/articles?limit=10&offset=${numberPage--}0`
    }
    doFetch(url)
        .then(posts => {
          return dispatch(getGlobalPosts(posts))
        })

  }, [dispatch, numberPage])

  return (
      <div>
        {(!!articles)
            ? articles.map((post, i) => <Post post={post} key={i}/>)
            : <Loading/>}
      </div>
  );
}
export default withRouter(Posts)
