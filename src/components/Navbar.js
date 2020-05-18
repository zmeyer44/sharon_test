import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className="container mx-0 p-0 col-12">
                <div className="row">
                    <a className="alertbar" href="https://nycwell.cityofnewyork.us/en/covid-19-digital-mental-health-resources/"target="_blank">
                        <div className="alert-bar-inner container text-center p-2">
                            links to other resources
                        </div>
                    </a>
                </div>
                
                <nav className="navbar m-0 px-sm-5 mx-sm-0">
                    <ul className="navbar-nav ">
                        <li className="nav-item ml-2 my-0">
                            <Link to="/">
                        <img className="py-1" src={require('../logo111.jpg')} width="120px"></img>
                        </Link>
                        </li>
                    </ul>
                    <i className="fas fa-bars fa-2x mr-3 bars" id='moreoptions'>
                        <ul>
                            <li><a href=''>Strategies for Remote Learning</a></li>
                            
                            <li><a href="">Coping and Wellness Tips</a></li>
                            <li className="dropdown"><a href="">Crisis Services</a></li>
                            <li><a href="">For Parents</a></li>
                        </ul>
                    </i>
                </nav>
                <div className="row expandable">
                    <ul className="text-purple" id="topbar">
                        <li className="dropdown"><a href="">Strategies For Remote Learning</a>
                        <ul>
                        <li><a href="https://mailchi.mp/nyumc/csc-parental-guide-covid-19-1049030?e=e2009b9cf7"target="_blank">Parents' Guide</a></li>
                        <li><a href="https://www.parents.com/kids/education/back-to-school/how-to-create-homework-hq/?slide=slide_df6430c0-7efb-453f-9d8c-ca81ac1a327b#slide_df6430c0-7efb-453f-9d8c-ca81ac1a327b"target="_blank">Setting up an Organized Workspace</a></li>

                        <li><a href="https://drive.google.com/file/d/1DpHef5aHVDOyYGc_7Y9kcdYOgKKjrOp1/view"target="_blank">Using Praise and Rewards Wisely</a></li>

                        <li><a href="https://signup.e2ma.net/signup/1917784/1800565/"target="_blank">Daily Parenting Tips</a></li>
                        <li><a href="https://www.alticeusa.com/news/articles/feature/corporate/altice-usa-brings-free-broadband-k-12-and-college-students-during-coronavirus-pandemic"target="_blank">Free Wifi Connection</a></li>
                        <li><a href="https://www.youtube.com/watch?v=WsxDUABH8q4"target="_blank">Getting Started on Seesaw and Google</a></li>
                        <li><a href="https://youtu.be/g5jG9VoROFs"target="_blank">Seesaw Tutorial for Parents</a></li>

                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Resources For kids</a>
                        <ul>
                            <li><a href="https://www.brainpop.com/health/diseasesinjuriesandconditions/coronavirus/"target="_blank">Animated Coronavirus video</a></li>
                            <li><a href="https://www.npr.org/sections/goatsandsoda/2020/02/28/809580453/just-for-kids-a-comic-exploring-the-new-coronavirus"target="_blank">npr Just for Kids</a></li>
                            <li><a href="https://www.mindheart.co/descargables"target="_blank">COVID children's book</a></li>
                            <li><a href="https://cosmickids.com/"target="_blank">Children's Yoga</a></li>
                            <li><a href="https://drive.google.com/file/d/11Bj9VQDFY35AYCz-SJltgudkYlc3af35/view"target="_blank">Coronavirus activity book</a></li>

                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Coping and Wellness Tips</a>
                        <ul>
                        <li><a href="https://www.tenpercent.com/meditationweeklyblog/meditation-and-coronavirus"target="_blank">Meditation and Coronavirus</a></li>
                            <li><a href="https://drive.google.com/file/d/1JUpQcKihKJ-eyDLReEg8i9v05zEzgrdy/view"target="_blank">Relaxation Strategies</a></li>
                            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fmanaging-stress-anxiety.html"target="_blank">Coping with Stress</a></li>
                            <li><a href="https://www.stopbreathethink.com/kids/"target="_blank">Stop, Breathe and Think</a></li>
                            <li><a href="https://drive.google.com/file/d/1ZZVYmvcQW4P1D4Tav0zw3Qjy3LZzTiLN/view"target="_blank">Mindfulness Exercises for Children</a></li>
                            <li><a href="https://drive.google.com/file/d/1WkSJLL8kDF8pyHEos7Ji4JVAAHCQk3on/view"target="_blank">Breathing Exercises for Kids</a></li>
                            <li><a href="https://childmind.org/article/how-to-help-children-calm-down/"target="_blank">Coping with Anger</a></li>
                            <li><a href="https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend?language=en"target="_blank">Helpful Videos</a></li>

                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Resources For Parents</a>
                        <ul>
                        <li><a href="https://centerhealthyminds.org/news/covid-19-and-our-common-humanity"target="_blank">Covid-19 and our Common Humanity</a></li>
                        
                            <li><a href="https://mailchi.mp/nyumc/csc-parental-guide-covid-19-1049030?e=e2009b9cf7"target="_blank">Adjusting to online learning</a></li>
                            <li><a href="https://www.pbs.org/parents/thrive/how-to-talk-to-your-kids-about-coronavirus"target="_blank">PBS: How to talk to your kids about the Coronavirus</a></li>
                            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/talking-with-children.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcommunity%2Fschools-childcare%2Ftalking-with-children.html"target="_blank">Talking with children about Coronavirus</a></li>
                            <li><a href="https://www.nytimes.com/2020/03/17/parenting/coronavirus-kids-talk.html"target="_blank">Discussing COVID with your children</a></li>
                        </ul>
                        </li>
                        <li className="dropdown"><a href="">Crisis Services</a>
                        <ul>
                            <li><a href="https://www.samhsa.gov/find-help/disaster-distress-helpline"target="_blank">Disaster Distress Helpline</a></li>
                            <li><a href="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program"target="_blank">Supplemental Nutrition Assistance Program</a></li>

                            <li><a href="https://www.islandharvest.org/"target="_blank">Food Banks</a></li>
                            <li><a href="https://211lifeline.org/detail.php?id=7339850"target="_blank">Mobile Crisis Team</a></li>
                            <li><a href="https://suicidepreventionlifeline.org/"target="_blank">Lifeline Chat</a></li>

                        </ul>
                        </li>
                        
                    </ul>
                </div>
            
            </div>
        )
    }
}
