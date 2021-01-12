import './App.css';
import Header from "./components/header/Header";
import Routers from "./routers"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTokenFromLocalStorrige} from "./redux/action-creators";
import doFetch from "./services/doFetch";

function App() {

  // const dispatch = useDispatch()
  // const token = useSelector(({user:{token}}) => token)
  //
  //
  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if(token) {
  //     doFetch(token)
  //         .then(r => console.log(r))
  //
  //     // dispatch(getTokenFromLocalStorrige(token))
  //   }
  // }, [dispatch])


  return (
      <div className="App">
        <Header/>
        <Routers/>
      </div>
  );
}

export default App;
