import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './App.css';
import React from 'react';

import AppNavbar from './components/navbar/appNavbar.jsx'
import AppRouter from './router';
import Footer from './components/footer/Footer.jsx'


class App extends React.Component{
  render(){
    return(
      <div>
          <div className="container">
            <div className="row"> 
                <div className="col-md-12">
                  <AppNavbar/>
                </div>
                <div className="col-md-12 page-height" >
                  <AppRouter/>
                </div>                
              <div className="col-md-12">
                  <Footer/>
              </div>
            </div>
      </div>          
      </div>
    )
  }
}

// ReactDOM.render( <AppRouter/>
//   , document.getElementById('App'));

export default App; 