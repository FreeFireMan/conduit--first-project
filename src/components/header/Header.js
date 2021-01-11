import './Header.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {choseNavLink, getTokenFromLocalStorrige} from "../../redux/action-creators";
import {useEffect} from "react";

export default function Header() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      dispatch(getTokenFromLocalStorrige(JSON.parse(token)))
    }
  }, [dispatch])

  const {loggedIn, user} = useSelector(({user: {loggedIn, user}}) => ({loggedIn, user}))
  const navLinkActive = useSelector(({homePage: {navLinkActive}}) => navLinkActive)

  return (
      <div className='header-wrapper'>
        <div className='navbar-wrapper'>
          <NavLink onClick={() => dispatch(choseNavLink('home'))}
                   to='/' className='logo'><p><b>conduit</b></p>
          </NavLink>
          {loggedIn
              ? <div className='navbar'>
                <NavLink onClick={() => dispatch(choseNavLink('home'))}
                         className={navLinkActive === 'home' ? "nav-link nav-act" : 'nav-link'}
                         to='/'>Home</NavLink>
                <NavLink onClick={() => dispatch(choseNavLink('new'))}
                         className={navLinkActive === 'new' ? "nav-link nav-act" : 'nav-link'}
                         to='/editor'>New Article</NavLink>
                <NavLink onClick={() => dispatch(choseNavLink('settings'))}
                         className={navLinkActive === 'settings' ? "nav-link nav-act" : 'nav-link'}
                         to='/settings'>Settings</NavLink>
                <NavLink onClick={() => dispatch(choseNavLink('profile'))}
                         className={navLinkActive === 'profile' ? "nav-link nav-act" : 'nav-link'}
                         to='/profile/feden2906'>{user.username}</NavLink>
              </div>
              : <div className='navbar'>
                <NavLink onClick={() => dispatch(choseNavLink('home'))}
                         className={navLinkActive === 'home' ? "nav-link nav-act" : 'nav-link'}
                         to='/'>Home</NavLink>
                <NavLink onClick={() => dispatch(choseNavLink('login'))}
                         className={navLinkActive === 'login' ? "nav-link nav-act" : 'nav-link'}
                         to='/login'>Sign in</NavLink>
                <NavLink onClick={() => dispatch(choseNavLink('register'))}
                         className={navLinkActive === 'register' ? "nav-link nav-act" : 'nav-link'}
                         to='/register'>Sign up</NavLink>
              </div>}
        </div>
      </div>
  );
}
