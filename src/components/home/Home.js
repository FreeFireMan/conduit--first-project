import './Home.css'
import {useDispatch, useSelector} from "react-redux";
import {choseTag, showFeed} from "../../redux/action-creators";
import {Link} from "react-router-dom";
import Posts from "../posts/Posts";
import FooterPage from "../footer-page/FooterPage";
import React, {useEffect, useState} from "react";
import Pagination from "../pagination/Pagination";
import doFetch from "../../services/doFetch";


export default function Home() {

  const dispatch = useDispatch()
  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  const {posts: {articles}, chosenTag, active} = useSelector(({post: {active, posts, chosenTag}}) => ({active, posts, chosenTag}))

  const [popularTag, setPopularTag] = useState([])

  useEffect(() => {
    doFetch('/api/tags')
        .then(value => setPopularTag(value.tags))
  }, [setPopularTag])

  const clickToChoseTag = (tag) => {
    doFetch(`/api/articles?tag=${tag}&limit=10&offset=0`)
        .then(value => dispatch(choseTag({value, tag})))
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

            {active === 'global' && !!articles && <Pagination/>}
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

