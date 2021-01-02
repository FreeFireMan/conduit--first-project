import './Header.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {
  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  return (
      <div className='header-wrapper'>
        <div className='navbar-wrapper'>
          <NavLink to='/' className='logo'><p><b>conduit</b></p></NavLink>
          {loggedIn
              ? <div className='navbar'>
                <NavLink className='nav-link' to='/login'>New Article</NavLink>
                <NavLink className='nav-link' to='/register'>Settings</NavLink>
                <NavLink className='nav-link' to='/profile/feden2906'>feden2906</NavLink>
              </div>
              : <div className='navbar'>
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link' to='/login'>Sign in</NavLink>
                <NavLink className='nav-link' to='/register'>Sign up</NavLink>
              </div>}
        </div>
      </div>
  );
}
