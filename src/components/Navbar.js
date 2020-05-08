import React, { Component } from 'react';


export default class  extends Component {
    render() {
        return (
            <div className="container mx-0 p-0 col-12">
                <div className="row">
                    <a className="alertbar" href="https://nycwell.cityofnewyork.us/en/covid-19-digital-mental-health-resources/">
                        <div className="alert-bar-inner container text-center p-2">
                            links to other resources
                        </div>
                    </a>
                </div>
                
                <nav className="navbar m-0 px-sm-5 mx-sm-0">
                    <ul className="navbar-nav ">
                        <li className="nav-item ml-2 my-0">
                        <img className="py-1" src={require('../logo111.jpg')} width="120px"></img>
                        </li>
                    </ul>
                    <i className="fas fa-bars fa-2x mr-3 bars" id='moreoptions'>
                        <ul>
                            <li><a href=''>Find Services</a></li>
                            
                            <li><a href="">Coping and Wellness Tips</a></li>
                            <li className="dropdown"><a href="">Crisis Services</a></li>
                            <li><a href="">For Parents</a></li>
                        </ul>
                    </i>
                </nav>
                <div className="row expandable">
                    <ul className="text-purple" id="topbar">
                        <li><a href="">Find Services</a></li>
                        <li className="dropdown"><a href="">Resources for kids</a>
                        <ul>
                            <li><a href="https://www.brainpop.com/health/diseasesinjuriesandconditions/coronavirus/">Animated Coronavirus video</a></li>
                            <li><a href="https://www.npr.org/sections/goatsandsoda/2020/02/28/809580453/just-for-kids-a-comic-exploring-the-new-coronavirus">npr Just for Kids</a></li>
                            <li><a href="https://www.mindheart.co/descargables">COVID childrens book</a></li>
                            <li><a href="https://cosmickids.com/">Childrens Yoga</a></li>

                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Coping and Wellness Tips</a>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1JUpQcKihKJ-eyDLReEg8i9v05zEzgrdy/view">Relaxation Strategies</a></li>
                            
                            <li><a href="https://www.stopbreathethink.com/kids/">Stop, Breathe and Think</a></li>
                            <li><a href="https://drive.google.com/file/d/1ZZVYmvcQW4P1D4Tav0zw3Qjy3LZzTiLN/view">Mindfulness Exercises for Children</a></li>
                            <li><a href="https://drive.google.com/file/d/1WkSJLL8kDF8pyHEos7Ji4JVAAHCQk3on/view">Breathing Exercises for Kids</a></li>
                            <li><a href="https://childmind.org/article/how-to-help-children-calm-down/">Coping with Anger</a></li>
                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Resources For Parents</a>
                        <ul>
                            <li><a href="https://mailchi.mp/nyumc/csc-parental-guide-covid-19-1049030?e=e2009b9cf7">Adjusting to online learning</a></li>
                            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/talking-with-children.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcommunity%2Fschools-childcare%2Ftalking-with-children.html">Talking with children about Coronavirus</a></li>
                            <li><a href="https://www.nytimes.com/2020/03/17/parenting/coronavirus-kids-talk.html">Discussing COVID with your children</a></li>
                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Crisis Services</a>
                        <ul>
                            <li><a href="https://www.samhsa.gov/find-help/disaster-distress-helpline">Disaster Distress Helpline</a></li>
                            <li><a href="https://suicidepreventionlifeline.org/chat/">Lifeline Chat</a></li>
                            <li><a href="https://www.islandharvest.org/">Food Banks</a></li>
                            <li><a href="https://211lifeline.org/detail.php?id=7339850">Mobile Crisis Team</a></li>
                        </ul>
                        </li>
                        
                    </ul>
                </div>
            
            </div>
        )
    }
}
