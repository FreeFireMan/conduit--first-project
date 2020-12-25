import './Header.css'
import {NavLink, Route, Switch} from "react-router-dom";

export default function Header() {
  return (
      <div className='header-wrapper'>
        <div className='navbar-wrapper'>
          <NavLink to='/' className='logo'><p><b>conduit</b></p></NavLink>
          <div className='navbar'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/login'>New Article</NavLink>
            <NavLink className='nav-link' to='/register'>Settings</NavLink>
            {/*<NavLink to='/profile/feden2906'>feden2906</NavLink>*/}
          </div>
        </div>
        <div className='banner'>
            <h1>conduit</h1>
            <p>A place to share your <i>Angular</i> knowledge.</p>
        </div>
      </div>
  );
}
