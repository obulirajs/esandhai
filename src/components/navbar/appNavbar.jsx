import React from 'react';

class AppNavbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Logo</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href='/home' >Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href='/about' >About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href='/contact' >ContactUs</a>
                        </li>
                    </ul>
                </nav> 
            </div>
        )
    }
}

export default AppNavbar;