import './PostsWithChosenTag.css'
import React from "react";

import {useSelector} from "react-redux";
import Loading from "../../services/Loading";
import Post from "../post/Post";
import {withRouter} from "react-router-dom";

function PostsWithChosenTag() {

  const {articles} = useSelector(({post: {chosenTagPosts}}) => chosenTagPosts)

  return (
      <div>
        {(!!articles)
            ? articles.map((post, i) => <Post post={post} key={i}/>)
            : <Loading/>}
      </div>
  );
}

export default withRouter(PostsWithChosenTag)