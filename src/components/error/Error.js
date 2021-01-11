import './Error.css'

export default function Error ({errors, errors: {email, password, username}}){
  const errorKey = Object.keys(errors)
    return (
            <ul>
              {/*{errorKey.map((key, i) => {*/}
              {/*  errors.find()*/}
              {/*})}*/}
              {email && email.map((value, i) => <li key={i} className='errors'><b>email {value}</b></li>)}
              {password && password.map((value, i) => <li key={i} className='errors'><b>password {value}</b></li>)}
              {username && username.map((value, i) => <li key={i} className='errors'><b>username {value}</b></li>)}
            </ul>
    );
}
