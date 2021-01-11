import './Error.css'

export default function Error({errors}) {
  const errorKey = Object.keys(errors)

  return (
      <ul>
        {errorKey.map((key, i) => errors[key].map((value, i) =>
                    <li key={i} className='errors'><b>{key} {value}</b></li>))
        }
      </ul>
  );
}
