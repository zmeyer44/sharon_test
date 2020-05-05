import React, { Component } from 'react';


export default class  extends Component {
    render() {
        return (
            <div className="container mx-0 col-12">
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
                    <ul className="text-purple" id="topbar">
                        <li><a href="">Find Services</a></li>
                        <li><a href="">App Library</a></li>
                        <li className="dropdown"><a href="">Coping and Wellness Tips</a>
                        <ul>
                            <li><a href="">Tips for staying mentaly healthy</a></li>
                            <li><a href="">Know when your stressed</a></li>
                            <li><a href="">Take a deep breath</a></li>
                            <li><a href="">Full body relaxation</a></li>
                            <li><a href="">Bring mindfulness to life</a></li>
                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Crisis Services</a>
                        <ul>
                            <li><a href="">Know who to call</a></li>
                            <li><a href="">Have a safety plan</a></li>
                            <li><a href="">Helping friends or family in a crisis</a></li>
                            <li><a href="">Mobile Crisis Teams</a></li>
                        </ul>
                        </li>
                        <li className="dropdown"><a href="">For Providers</a>
                        <ul>
                            <li><a href="">Healthly Homes</a></li>
                            <li><a href="">Home and community based services</a></li>
                            <li><a href="">Provider updates and additions</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            
            </div>
        )
    }
}
