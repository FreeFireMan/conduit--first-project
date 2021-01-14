import {useEffect} from "react";
import postFetch from "../../services/postFetch";
import {getErrorOnToken, getUserOnToken} from "../../redux/action-creators";
import {useDispatch} from "react-redux";

export default function CheckToken({children}) {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      const options = {
        headers: {
          authorization: `Token ${token}`
        }
      }

      postFetch(`/api/user`, options)
          .then(({data: {user}}) => {
                dispatch(getUserOnToken(user))
              }
          )
          .catch(({response: {data: {errors}}}) => {
            dispatch(getErrorOnToken(errors))
          })
    }
  }, [dispatch])


  return children

}
