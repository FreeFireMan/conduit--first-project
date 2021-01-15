import './Settings.css'
import FooterPage from "../footer-page/FooterPage";
import {useDispatch, useSelector} from "react-redux";
import {getErrorOnUpdateInfo, IsLogOut, updateInfo} from "../../redux/action-creators";
import {Redirect} from "react-router-dom";
import {useState} from "react";
import postFetch from "../../services/postFetch";
import Error from "../error/Error";
import Save from "../save/Save";

export default function Settings() {

  const {token, loggedIn, user, errors, save} = useSelector(({user: {loggedIn, user, token, errors, save}}) =>
        ({loggedIn, user, token, errors, save}))
  const dispatch = useDispatch()


  const [image, setImage] = useState(user.image || "")
  const [username, setUsername] = useState(user.username || "")
  const [bio, setBio] = useState(user.bio || "")
  const [email, setEmail] = useState(user.email || "")
  const [password, setPass] = useState("")

  if (!loggedIn) {
    return <Redirect to="/"/>
  }
  if (save) {
    return <Redirect to={`/${user.username}`}/>
  }

  const updateSettings = () => {
    const updatedAt = new Date()

    const options = {
      method: "put",
      headers: {
        authorization: `Token ${token}`
      },
      data: {user:{...user, image, username, bio, email, updatedAt, password}}}

    postFetch('/api/user', options)
        .then(({data: {user}}) => {
          dispatch(updateInfo(user))

        })
        .catch(({response: {data: {errors}}}) => {
          dispatch(getErrorOnUpdateInfo(errors))
        })
  }
  return (
      <div>
        <div className='settings-form'>
          <h1>Your Settings</h1>
          <div className='errors-wrapper'>
            {save && <Save/>}
            {errors && <Error/>}
          </div>
          <input onInput={(e) => setImage(e.currentTarget.value)} value={image}
                 type="text" className='settings-input' placeholder='URL of profile picture'/>
          <input onInput={(e) => setUsername(e.currentTarget.value)} value={username}
                 type="text" className='settings-input' placeholder='Username'/>
          <textarea onInput={(e) => setBio(e.currentTarget.value)} value={bio}
                    className='settings-area' placeholder='Short bio about you'/>
          <input onInput={(e) => setEmail(e.currentTarget.value)} value={email}
                 type="text" className='settings-input' placeholder='Email'/>
          <input onInput={(e) => setPass(e.currentTarget.value)} value={password}
                 type="password" className='settings-input' placeholder='New Password'/>

          <div className='settings-btn-wrapper'>
            <input onClick={updateSettings} type='button' className='settings-btn-update' value='Update Settings'/>
          </div>
          <div className='settings-btn-2-wrapper'>
            <input onClick={() => dispatch(IsLogOut())} type='button' className='settings-btn-logout' value='Or click here to logout'/>
          </div>

        </div>

        <FooterPage/>
      </div>
  );
}
