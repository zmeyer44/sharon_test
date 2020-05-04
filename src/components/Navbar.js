import React, { Component } from 'react';


export default class  extends Component {
    render() {
        return (
            <div className="container mx-0 col-12 p-0">
                <div className="row">
                    <a className="alertbar" href="https://nycwell.cityofnewyork.us/en/covid-19-digital-mental-health-resources/">
                        <div className="alert-bar-inner container text-center p-2">
                            links to other resources
                        </div>
                    </a>
                </div>
                
                <nav className="navbar mx-0 py-0 px-0 px-sm-5 mx-sm-0">
                    <ul className="navbar-nav ">
                        <li className="nav-item ml-2 my-0">
                        <img className="py-1" src={require('../logo111.jpg')} width="120px"></img>
                        </li>
                    </ul>
                    <i className="fas fa-bars fa-2x mr-3 bars"></i>
                </nav>
                <div className="row expandable">
                    <ul className="text-purple">
                        <li>Find Services</li>
                        <li>Coping and Wellness Tips</li>
                        <li>Crisis Services</li>
                        <li>For Providers</li>
                    </ul>
                </div>
            
            </div>
        )
    }
}
