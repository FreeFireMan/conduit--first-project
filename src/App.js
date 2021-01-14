import './App.css';
import Header from "./components/header/Header";
import Routers from "./routers"
import {useSelector} from "react-redux";
import Loading from "./services/Loading";

function App() {

  const loading = useSelector(({user: {loading}}) => loading)

  return loading
            ? <Loading/>
            : <div className="App">
                <Header/>
                <Routers/>
              </div>
}

export default App;
