import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import './App.css';
import React from 'react';

import AppNavbar from './components/navbar/appNavbar.jsx'
import AppRouter from './router';


class App extends React.Component{
  render(){
    return(
      <div>
          <AppNavbar/>
          <AppRouter/>
      </div>
    )
  }
}

// ReactDOM.render( <AppRouter/>
//   , document.getElementById('App'));

export default App; 