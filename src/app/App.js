import logo from './../logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './../crud/Home';
import Router from "./../Router";

function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
