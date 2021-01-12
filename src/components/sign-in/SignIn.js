import './SignIn.css'
import {Link, Redirect} from "react-router-dom";
import FooterPage from "../footer-page/FooterPage";
import Error from "../error/Error";
import {useEffect, useState} from "react";
import postFetch from "../../services/postFetch";
import {useDispatch, useSelector} from "react-redux";
import {getTokenFromLocalStorrige, IsLogIn} from "../../redux/action-creators";


function SignIn() {

  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState('')
  const [email, setEmail] = useState('')

  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  const dispatch = useDispatch()

  const ClickSignIn = () => {

    const option = {
      method: "post",
      data: {user: {email, password}}
    }

    postFetch('/api/users/login', option)
        .then(({data: {user}}) => {
          localStorage.setItem("token", JSON.stringify(user.token))
          localStorage.setItem("user", JSON.stringify(user))
          dispatch(IsLogIn(user))
        })
        .catch(({response: {data: {errors}}}) => {
          setErrors(errors)
        })
  }
  if(loggedIn){
    return <Redirect to="/"/>
  }


  return (
      <div className='modal-wrapper'>

        <div className='sign'>
          <div className='sign-form'>

            <p className='sign-title'>Sign in</p>
            <Link className='sign-link' to='/register'>Need an account?</Link>

            <div className='errors-wrapper'>
              {errors && <Error errors={errors}/>}
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

export default SignIn
