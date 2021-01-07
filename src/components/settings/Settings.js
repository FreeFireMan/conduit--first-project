import './Settings.css'
import FooterPage from "../footer-page/FooterPage";

export default function Settings() {

  return (
      <div>
        <div className='settings-form'>
          <h1>Your Settings</h1>
          <input type="text" className='settings-input' placeholder='URL of profile picture'/>
          <input type="text" className='settings-input' placeholder='Username'/>
          <textarea className='settings-area' placeholder='Short bio about you'/>
          <input type="text" className='settings-input' placeholder='Email'/>
          <input type="text" className='settings-input' placeholder='New Password'/>

          <div className='settings-btn-wrapper'>
            <input type='button' className='settings-btn-update' value='Update Settings'/>
          </div>
          <div className='settings-btn-2-wrapper'>
            <input type='button' className='settings-btn-logout' value='Or click here to logout'/>
          </div>

        </div>

        <FooterPage/>
      </div>
  );
}