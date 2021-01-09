import {Link} from "react-router-dom";
import FooterPage from "../footer-page/FooterPage";
import {useState} from "react";
import postFetch from "../../services/postFetch";
import Error from "../error/Error";

export default function SignUp() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const ClickSignUp = () => {
    const data = {user: {email, password, username}}
    postFetch('/api/users', data)
        .then(r => console.log(r))
  }

  return (
      <div className='modal-wrapper'>

        <div className='sign'>
          <div className='sign-form'>

            <p className='sign-title'>Sign up</p>
            <Link className='sign-link' to='/login'>Have an account?</Link>

            <div className='errors-wrapper'>
              <Error/>
            </div>

            <input onChange={(e) => setUsername(e.currentTarget.value)}
                   className='sign-input' type='text' placeholder='Username'/>
            <input onChange={(e) => setEmail(e.currentTarget.value)}
                   className='sign-input' type='email' placeholder='Email'/>
            <input onChange={(e) => setPassword(e.currentTarget.value)}
                   className='sign-input' type='password' placeholder='Password'/>
            <div className='btn-wrapper'>
              <input onClick={() => ClickSignUp()} className='sign-btn' type="button" value='Sign up'/>
            </div>
          </div>
        </div>

        <FooterPage/>

      </div>
  );
}
