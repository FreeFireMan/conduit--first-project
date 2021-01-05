import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import PostFull from "./components/post-full/PostFull";

function App() {

  return (
      <div className="App">
        <Header/>

        <Switch>
          <Route path={`/article/:linkToFullPost`} component={PostFull}/>
          <Route path={'/login'} component={SignIn}/>
          <Route path={'/register'} component={SignUp}/>
          <Route path={'/'} component={Home}/>
        </Switch>
      </div>
  );
}

export default App;
