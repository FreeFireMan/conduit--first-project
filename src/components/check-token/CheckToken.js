import {useEffect} from "react";
import postFetch from "../../services/postFetch";
import {getErrorOnToken, getUserOnToken, loadingLS, loadingLSWithoutToken} from "../../redux/action-creators";
import {useDispatch} from "react-redux";

export default function CheckToken({children}) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadingLS(true))
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
    }else {
      dispatch(loadingLS(false))
    }
  }, [dispatch])


  return children

}
