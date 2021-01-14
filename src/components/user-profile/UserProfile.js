import './UserProfile.css'
import FooterPage from "../footer-page/FooterPage";
import {Link} from "react-router-dom";
import {getFavoritedPosts, getMyPosts, loadingLS, showFeed} from "../../redux/action-creators";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import postFetch from "../../services/postFetch";


export default function UserProfile (){

  const dispatch = useDispatch()
  const active = useSelector(({post: {active}}) => active)
  const {loggedIn, user, user:{image, username, bio}} = useSelector(({user: {loggedIn, user}}) => ({loggedIn, user}))

  const [myPosts, setMyPosts] = useState('')
  const [favoritedPosts, setFavoritedPosts] = useState('')
  useEffect(() => {

    dispatch(loadingLS(true))
    let url = ''
    const options = {
    }
    if(active === 'global') {url = `/api/articles?author=${username}&limit=10&offset=0`}
    if(active === 'your') {url = `/api/articles?favorited=${username}&limit=10&offset=0`}
    
    postFetch(url, options)
        .then(response => {
          active === 'global' && setMyPosts(response)
          active === 'your' && setFavoritedPosts(response)
        })

  }, [active, dispatch, username])

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
              <div onClick={() => dispatch(showFeed('global'))}
                   className={active === 'global' ? 'nItem chosenItem' : 'nItem'}>My Posts
              </div>
              <Link to={loggedIn || '/login'}
                    onClick={() => dispatch(showFeed('your'))}
                    className={active === 'your' ? 'nItem chosenItem' : 'nItem'}>Favorited Posts</Link>
            </div>

            456789

            </body>


            <FooterPage/>
        </div>
    );
}
