import './UserProfile.css'
import FooterPage from "../footer-page/FooterPage";
import {Link, withRouter} from "react-router-dom";
import {clearPosts, getGlobalPosts, showFeed} from "../../redux/action-creators";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import postFetch from "../../services/postFetch";
import Loading from "../../services/Loading";
import Post from "../post/Post";
import Pagination from "../pagination/Pagination";


function UserProfile() {

  const dispatch = useDispatch()
  const {active, posts: {articles}, paginationActive} = useSelector(({
          post: {
            active,
            posts,
            paginationActive
          }
        }) => ({active, posts, paginationActive}))
  const {loggedIn, user: {image, username, bio}} = useSelector(({user: {loggedIn, user}}) => ({loggedIn, user}))


  useEffect(() => {
    let url = ''
    const options = {}
    if (active === 'global') {
      url = `/api/articles?author=${username}&limit=10&offset=0`
      if (paginationActive > 1) {
        url = `/api/articles?author=${username}&limit=10&offset=${paginationActive - 1}0`
      }
    }
    if (active === 'your') {
      url = `/api/articles?favorited=${username}&limit=10&offset=0`
      if (paginationActive > 1) {
        url = `/api/articles?favorited=${username}&limit=10&offset=${paginationActive - 1}0`
      }
    }

    postFetch(url, options)
        .then(({data}) => {
          dispatch(getGlobalPosts(data))
        })
  }, [active, dispatch, paginationActive, username])

  const clickLink = (name) => {
    dispatch(showFeed(name))
    dispatch(clearPosts())
  }

  return (
      <div>

        <header className='profile-header'>
          <img className='profile-photo' src={image} alt="foto"/>
          <p className='profile-name'><b>{username}</b></p>
          <p className='profile-bio'>{bio}</p>
          <div className='profile-btn-settings-wrapper'>
            <Link to={'/settings'} className='profile-btn-settings'>Edit Profile Settings</Link>
          </div>
        </header>

        <body className='profile-body'>
        <div className='profile-nav-link'>
          <Link to={`/profile/${username}`}
                onClick={() => clickLink('global')}
                className={active === 'global' ? 'nItem chosenItem' : 'nItem'}>My Posts
          </Link>
          <Link to={loggedIn ? `/profile/${username}/favorites` : '/login'}
                onClick={() => clickLink('your')}
                className={active === 'your' ? 'nItem chosenItem' : 'nItem'}>Favorited Posts
          </Link>
        </div>

        <div>
          {!!articles ? articles.map((value, i) => <Post post={value} key={i}/>) : <Loading/>}
        </div>

        {!!articles && <Pagination/>}
        </body>


        <FooterPage/>
      </div>
  );
}

export default withRouter(UserProfile)
