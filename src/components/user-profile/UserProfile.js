import './UserProfile.css'
import FooterPage from "../footer-page/FooterPage";
import {Link} from "react-router-dom";
import {showFeed} from "../../redux/action-creators";
import React from "react";
import {useDispatch} from "react-redux";

export default function UserProfile (){

const dispatch = useDispatch

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
              <Link to={loggedIn ? '/' : '/login'}
                    onClick={() => dispatch(showFeed('your'))}
                    className={active === 'your' ? 'nItem chosenItem' : 'nItem'}>Your Feed</Link>
              <div onClick={() => dispatch(showFeed('global'))}
                   className={active === 'global' ? 'nItem chosenItem' : 'nItem'}>Global Feed
              </div>
              <div onClick={() => dispatch(showFeed('chosen'))}
                   className={active === 'chosen' ? 'nItem chosenItem' : 'nItem'}>#tag
              </div>
            </div>
            </body>

            <FooterPage/>
        </div>
    );
}