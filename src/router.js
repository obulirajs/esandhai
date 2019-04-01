import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/ContactUs.jsx';
import App from './App.jsx';
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route path="/home" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/contact/" component={Contact} />
            </Router>
        )        
    }
}

export default AppRouter;