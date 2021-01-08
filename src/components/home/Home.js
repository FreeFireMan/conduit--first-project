import './Home.css'
import {useDispatch, useSelector} from "react-redux";
import {choseTag, getChosenTagPosts, showFeed} from "../../redux/action-creators";
import {Link, withRouter} from "react-router-dom";
import Posts from "../posts/Posts";
import FooterPage from "../footer-page/FooterPage";
import React, {useEffect, useState} from "react";
import Pagination from "../pagination/Pagination";
import doFetch from "../../services/doFetch";
import PostsWithChosenTag from "../posts-with-chosen-tag/PostsWithChosenTag";


function Home({match:{params:{numberPage}}}) {

  const dispatch = useDispatch()
  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  const {posts: {articles}, chosenTag, active} = useSelector(({post: {active, posts, chosenTag}}) => ({
    active,
    posts,
    chosenTag
  }))

  const [popularTag, setPopularTag] = useState([])

  useEffect(() => {
    doFetch('/api/tags')
        .then(value => setPopularTag(value.tags))
  }, [setPopularTag])

  const clickToChoseTag = (tag) => {
    let url = `/api/articles?tag=${tag}&limit=10&offset=0`
    if (numberPage) {
      url = `/api/articles?tag=${tag}&limit=10&offset=${numberPage--}0`
    }
    doFetch(url)
        .then(posts => {
          return dispatch(getChosenTagPosts({posts, tag}))
        })
  }

    return (
        <div>
          <div className='banner'>
            <h1>conduit</h1>
            <p>A place to share your <i>Angular</i> knowledge.</p>
          </div>
          <div className='body'>

            <div className='column-post'>

              <div className='post-nav-link'>
                <Link to={loggedIn ? '/' : '/login'}
                      onClick={() => dispatch(showFeed('your'))}
                      className={active === 'your' ? 'nItem chosenItem' : 'nItem'}>Your Feed</Link>
                <div onClick={() => dispatch(showFeed('global'))}
                     className={active === 'global' ? 'nItem chosenItem' : 'nItem'}>Global Feed
                </div>
                {chosenTag &&
                <div onClick={() => dispatch(showFeed('chosen'))}
                     className={active === 'chosen' ? 'nItem chosenItem' : 'nItem'}>#{chosenTag}
                </div>}
              </div>

              {active === 'your' && loggedIn && <Posts/>}
              {active === 'global' && <Posts/>}
              {active === 'chosen' && <PostsWithChosenTag/>}

              {active === 'global' && !!articles && <Pagination/>} //TODO
            </div>

            <div className='tag-wrapper'>
              <div className='column-tag'>
                <h4>Popular Tags</h4>
                <div className='tag-wrapper-2'>
                  {!!popularTag && popularTag.map((value, i) =>
                      (<div onClick={() => clickToChoseTag(value)} key={i} className='popular-tag'>{value}</div>)
                  )}
                </div>
              </div>
            </div>

          </div>
          <FooterPage/>
        </div>
    );
  }
export default withRouter(Home)

