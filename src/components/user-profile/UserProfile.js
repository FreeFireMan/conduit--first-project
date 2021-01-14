import './UserProfile.css'
import FooterPage from "../footer-page/FooterPage";
import {Link} from "react-router-dom";
import {showFeed} from "../../redux/action-creators";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function UserProfile (){

const dispatch = useDispatch()
  const active = useSelector(({homePage: {active}}) => active)
  const {loggedIn, user, user:{image, username, bio}} = useSelector(({user: {loggedIn, user}}) => ({loggedIn, user}))

  console.log(user)
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
            </body>


            <FooterPage/>
        </div>
    );
}
