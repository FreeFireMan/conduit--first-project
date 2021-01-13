import {Link, Redirect} from "react-router-dom";
import FooterPage from "../footer-page/FooterPage";
import {useEffect, useState} from "react";
import postFetch from "../../services/postFetch";
import Error from "../error/Error";
import {useDispatch, useSelector} from "react-redux";
import {getTokenFromLocalStorrige, IsLogIn} from "../../redux/action-creators";


function SignUp() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  const dispatch = useDispatch()

  const ClickSignUp = () => {
    const option = {
      method: "post",
      data: {
        user: {email, password, username}
      }
    }
    postFetch('/api/users', option)
        .then(({data: {user}}) => {
          localStorage.setItem("token", JSON.stringify(user.token))
          dispatch(IsLogIn(user))
        })
        .catch(({response: {data: {errors}}}) => {
          setErrors(errors)
        })
  }
  if (loggedIn) {
    return <Redirect to="/"/>
  }

  return (
      <div className='modal-wrapper'>

        <div className='sign'>
          <div className='sign-form'>

            <p className='sign-title'>Sign up</p>
            <Link className='sign-link' to='/login'>Have an account?</Link>

            <div className='errors-wrapper'>
              {errors && <Error errors={errors}/>}
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

export default SignUp
