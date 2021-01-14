import './Header.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {choseNavLink, clickToHeaderLink} from "../../redux/action-creators";

export default function Header() {

  const dispatch = useDispatch()
  const {loggedIn, user} = useSelector(({user: {loggedIn, user}}) => ({loggedIn, user}))
  const navLinkActive = useSelector(({homePage: {navLinkActive}}) => navLinkActive)

  const clickNavLink = (name) => {
    dispatch(clickToHeaderLink())
    dispatch(choseNavLink(name))
  }

  return (
      <div className='header-wrapper'>
        <div className='navbar-wrapper'>
          <NavLink onClick={() => dispatch(choseNavLink('home'))}
                   to='/' className='logo'><p><b>conduit</b></p>
          </NavLink>
          {loggedIn
              ? <div className='navbar'>
                <NavLink onClick={() => clickNavLink('home')}
                         className={navLinkActive === 'home' ? "nav-link nav-act" : 'nav-link'}
                         to='/'>Home</NavLink>
                <NavLink onClick={() => clickNavLink('new')}
                         className={navLinkActive === 'new' ? "nav-link nav-act" : 'nav-link'}
                         to='/editor'>New Article</NavLink>
                <NavLink onClick={() => clickNavLink('settings')}
                         className={navLinkActive === 'settings' ? "nav-link nav-act" : 'nav-link'}
                         to='/settings'>Settings</NavLink>
                <NavLink onClick={() => clickNavLink('profile')}
                         className={navLinkActive === 'profile' ? "nav-link nav-act" : 'nav-link'}
                         to={`/profile/${user.username}`}>{user.username}</NavLink>
              </div>
              : <div className='navbar'>
                <NavLink onClick={() => clickNavLink('home')}
                         className={navLinkActive === 'home' ? "nav-link nav-act" : 'nav-link'}
                         to='/'>Home</NavLink>
                <NavLink onClick={() => clickNavLink('login')}
                         className={navLinkActive === 'login' ? "nav-link nav-act" : 'nav-link'}
                         to='/login'>Sign in</NavLink>
                <NavLink onClick={() => clickNavLink('register')}
                         className={navLinkActive === 'register' ? "nav-link nav-act" : 'nav-link'}
                         to='/register'>Sign up</NavLink>
              </div>}
        </div>
      </div>
  );
}
