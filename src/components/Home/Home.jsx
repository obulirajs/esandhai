import React from 'react';
import './Home.css'
class Home extends React.Component{
    render(){
      return(
        <div className="container">
          <div className="row" >
            <div className="col-md-12">
            <img src={require('../../images/banner.png')} className="banner-home"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 header-template">
              <div className="tile-width">
                <img src={require('../../images/field.jpg')} className="image-size" />
                <p>
                  Organic Farming description goes here. Organic Farming description goes here.
                  Organic Farming description goes here.Organic Farming description goes here.
                </p>
              </div>
            </div>
            <div className="col-md-3 header-template">
              <div className="tile-width">
                <img src={require('../../images/dairy_farming.jpg')} className="image-size" />
                <p>
                  Dairy Farming description goes here. Dairy Farming description goes here.
                  Dairy Farming description goes here.Dairy Farming description goes here.
                </p>
              </div>
            </div>
            <div className="col-md-3 header-template">
              <div className="tile-width">
                <img src={require('../../images/livestock.jpg')} className="image-size" />
                <p>
                  Livestock Farming description goes here. Livestock Farming description goes here.
                  Livestock Farming description goes here.Livestock Farming description goes here.
                </p>
              </div>
            </div>
            <div className="col-md-3 header-template">
              <div className="tile-width">
                <img src={require('../../images/machines_instruments.jpg')} className="image-size" />
                <p>
                  Dairy Farming description goes here. Dairy Farming description goes here.
                  Dairy Farming description goes here.Dairy Farming description goes here.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      )
    }
  }
  
  export default Home;