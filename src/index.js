import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";
import CheckToken from "./components/check-token/CheckToken";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <CheckToken>
          <Router>
            <App/>
          </Router>
        </CheckToken>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
