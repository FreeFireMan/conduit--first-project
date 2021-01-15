import './Error.css'
import {useSelector} from "react-redux";

export default function Error() {

  const errors = useSelector(({user: {errors}}) => errors)
  const errorKey = Object.keys(errors)

  return (
      <ul>
        {errorKey.map((key, i) => errors[key].map((value, i) =>
            <li key={i} className='errors'><b>{key} {value}</b></li>))
        }
      </ul>
  );
}
