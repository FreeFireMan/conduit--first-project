import './UserProfile.css'
import FooterPage from "../footer-page/FooterPage";
import {Link} from "react-router-dom";
import {showFeed} from "../../redux/action-creators";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function UserProfile (){

const dispatch = useDispatch()
  const active = useSelector(({homePage: {active}}) => active)
  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)


  return (
        <div>

            <header className='profile-header'>
              <img className='profile-photo' src="https://icdn.lenta.ru/images/2020/09/11/13/20200911130707980/pwa_list_sq_1280_b52f104ad4178fa38bd74039fba7d4b2.png" alt="foto"/>
              {/*TODO*/}
              <p className='profile-name'><b>{'userName'}</b></p>
              <p className='profile-bio'>{'bio'}</p>
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