import {Link} from "react-router-dom";
import './FooterPage.css'

export default function FooterPage (){
    return (
        <footer className='fs13 modal-footer'>
          <Link to='/' className='logo-footer'><p><b>conduit</b></p></Link>
          <p>© 2021. An interactive learning project from <a href="https://thinkster.io/"
                                                             className='green-link'>Thinkster</a></p>
          <p>. Code licensed under MIT. </p>
        </footer>
    );
}