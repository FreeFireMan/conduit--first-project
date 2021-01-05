import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {
  ClickSignUp,
  InputValueRegisterEmail,
  InputValueRegisterPass,
  InputValueRegisterUsername
} from "../../redux/action-creators";
import FooterPage from "../footer-page/FooterPage";

export default function SignUp() {

  const dispatch = useDispatch()

  return (
      <div className='modal-wrapper'>

        <div className='sign'>
          <div className='sign-form'>

            <p className='sign-title'>Sign up</p>
            <Link className='sign-link' to='/login'>Have an account?</Link>
            <input onChange={(e) => dispatch(InputValueRegisterUsername(e.currentTarget.value))}
                   className='sign-input' type='text' placeholder='Username'/>
            <input onChange={(e) => dispatch(InputValueRegisterEmail(e.currentTarget.value))}
                   className='sign-input' type='email' placeholder='Email'/>
            <input onChange={(e) => dispatch(InputValueRegisterPass(e.currentTarget.value))}
                   className='sign-input' type='password' placeholder='Password'/>
            <div className='btn-wrapper'>
              <input onClick={() => dispatch(ClickSignUp())} className='sign-btn' type="button" value='Sign up'/>
            </div>
          </div>
        </div>

        <FooterPage/>

      </div>
  );
}