import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'production') {
  console.log = () => { }
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
