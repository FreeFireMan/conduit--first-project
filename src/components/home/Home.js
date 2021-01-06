import './Home.css'
import {useDispatch, useSelector} from "react-redux";
import {showFeed} from "../../redux/action-creators";
import {Link} from "react-router-dom";
import Posts from "../posts/Posts";
import FooterPage from "../footer-page/FooterPage";
import React from "react";
import Pagination from "../pagination/Pagination";


export default function Home() {

  const dispatch = useDispatch()
  const active = useSelector(({homePage: {active}}) => active)
  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
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
                   className={active === 'global' ? 'nItem chosenItem' : 'nItem'}>Global Feed</div>
              <div onClick={() => dispatch(showFeed('chosen'))}
                   className={active === 'chosen' ? 'nItem chosenItem' : 'nItem'}>#tag</div>
            </div>

            {active === 'your' && loggedIn && <Posts/> }
            {active === 'global' && <Posts/>}

            <Pagination/>
          </div>


          <div className='tag-wrapper'>
            <div className='column-tag'>
              <h4>Popular Tags</h4>
                TODO
            </div>
          </div>

        </div>
        <FooterPage/>
      </div>
  );
}