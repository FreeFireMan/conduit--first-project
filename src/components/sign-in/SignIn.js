import './SignIn.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ClickSignIn, InputValueEmail, InputValuePass} from "../../redux/action-creators";

export default function SignIn() {

  const dispatch = useDispatch()

  return (
      <div className='modal-wrapper'>

        <div className='sign'>
          <div className='sign-form'>

            <p className='sign-title'>Sign in</p>
            <Link className='sign-link' to='/register'>Need an account?</Link>
            <input onChange={(e) => dispatch(InputValueEmail(e.currentTarget.value))}
                   className='sign-input' type='email' placeholder='Email'/>
            <input onChange={(e) => dispatch(InputValuePass(e.currentTarget.value))}
                   className='sign-input' type='password' placeholder='Password'/>
            <div className='btn-wrapper'>
              <input onClick={() => dispatch(ClickSignIn())} className='sign-btn' type="button" value='Sign in'/>
            </div>
          </div>
        </div>

        <footer className='fs13 modal-footer'>
          <Link to='/' className='logo-footer'><p><b>conduit</b></p></Link>
          <p>© 2021. An interactive learning project from <a href="https://thinkster.io/"
                                                             className='green-link'>Thinkster</a></p>
          <p>. Code licensed under MIT. </p>
        </footer>

      </div>
  );
}
