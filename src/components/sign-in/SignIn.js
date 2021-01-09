import './SignIn.css'
import {Link} from "react-router-dom";
import FooterPage from "../footer-page/FooterPage";
import Error from "../error/Error";
import {useState} from "react";
import postFetch from "../../services/postFetch";

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const ClickSignIn = () => {
    const data = {user: {email, password}}
    postFetch('/api/users/login', data)
        .then(r => console.log(r))
  }

  return (
      <div className='modal-wrapper'>

        <div className='sign'>
          <div className='sign-form'>

            <p className='sign-title'>Sign in</p>
            <Link className='sign-link' to='/register'>Need an account?</Link>

            <div className='errors-wrapper'>
              <Error/>
            </div>

            <input onChange={(e) => setEmail(e.currentTarget.value)}
                   className='sign-input' type='email' placeholder='Email'/>
            <input onChange={(e) => setPassword(e.currentTarget.value)}
                   className='sign-input' type='password' placeholder='Password'/>
            <div className='btn-wrapper'>
              <input onClick={() => ClickSignIn()} className='sign-btn' type="button" value='Sign in'/>
            </div>
          </div>
        </div>

        <FooterPage/>

      </div>
  );
}
