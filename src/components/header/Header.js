import './Header.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {choseNavLink} from "../../redux/action-creators";

export default function Header() {

  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  const navLinkActive = useSelector(({homePage: {navLinkActive}}) => navLinkActive)
  const dispatch = useDispatch()

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
                         to='/profile/feden2906'>feden2906</NavLink>
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
