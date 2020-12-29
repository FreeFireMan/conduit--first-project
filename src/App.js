import './App.css';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {useState} from "react/cjs/react.production.min";

function App() {
  const {loginUser, setLoginUser} = useState()
  return (
    <div className="App">
      <Header loginUser={loginUser}/>
      <Body loginUser={loginUser}/>
    </div>
  );
}

export default App;
