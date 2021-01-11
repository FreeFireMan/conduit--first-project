import {Link, withRouter} from "react-router-dom";
import FooterPage from "../footer-page/FooterPage";
import {useState} from "react";
import postFetch from "../../services/postFetch";
import Error from "../error/Error";
import {useSelector} from "react-redux";

function SignUp({history}) {

  const loggedIn = useSelector(({user: {loggedIn}}) => loggedIn)
  loggedIn && history.push("/")

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState('')

  const ClickSignUp = () => {
    const option = {
      method: "post",
      data: {
        user: {email, password, username}
      }
    }
    postFetch('/api/users', option)
        .then(({data: {user}}) => {
          console.log(user)
          // localStorage.setItem("user", JSON.stringify(user))
          // localStorage.setItem("token", JSON.stringify(user.token))
        })
        .catch(({response: {data: {errors}}}) => {
          setErrors(errors)
        })
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

export default withRouter(SignUp)
