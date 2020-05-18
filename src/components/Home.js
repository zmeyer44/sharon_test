import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoSlider from './VideoSlider';

export default class Home extends Component {
    render() {
        return (
            <div className="container col-12 mx-0 p-0" id="full">
                <div className="row hero">
                    <div className="container hero-inner">
                        <div className="row ">
                            <h1 className="text-title mx-auto hero-text col-7 text-center text-capitalize">The floral park bellerose school community is here to help</h1>
                            <h3 className="mx-auto col-7 text-center text-sub">"We are all in this together"</h3>
                        </div>
                        <div className="row ">
                            <h3 className="mx-auto col-7 text-center text-capitalize text-sub"></h3>
                        </div>
                    </div>

                </div>

                <div className="row align-items-center mx-auto py-5" id="bar2">
                    <div className="col-10 col-md-5 mx-auto">
                        
                        <h2>Lauren is a true role model!!</h2>
                        <p>Lauren Avigliano is a sixth grade student in the FPBS who always puts her heart into everything she does.    She is always willing to help a friend in need.  Instead of gifts for her birthday, she asked her family and friends to donate food to help support the food pantry in OLV.  There was a huge response.  
Now Lauren set up a <a href="https://www.gofundme.com/f/pgcagr-feeding-those-in-need" className="gofundme">Go Fund Me</a> page and raised $4000 so far which is being used for food, diapers and other needs that families have at this unprecedented time.</p>

                    </div>
                    <div className="col-10 col-md-4 mx-auto align-items-center">
                        
                        <div className="circle1 mx-auto my-5">
                            <div className="circle2 pt-5  hovzoom">
                                <h2 className="text-center my-0">FPBSD</h2>
                                <p className="text-center my-0">Cares</p>
                            </div>
                            <div className="circle3 pt-5 hovzoom">
                                <h3 className="text-center my-0">We are here as a resource</h3>
                          
                            </div>
                            <div className="circle4 hovzoom">

                            </div>
                            <div className="circle5 hovzoom">
                                
                            </div>

                        </div>
                   

                    </div>
                </div>
                <div className="row align-items-center mx-0 " id="bar3">
                    <div className="col-6">
                    <iframe className="mx-auto my-5" width="560" height="315" src="https://www.youtube.com/embed/bfNOAN9KvU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div className="col-10 col-md-4 mx-auto">
                        <h5>We are dedicated to</h5>
                        <h2>Helping our community</h2>
                        <p>We are dedicated to helping members of the Floral Park Bellerose School Community who are struggling through these troubling times. We encourage those who are in need of support to utilize the available resources.</p>

                    </div>
                   

                
                    
                </div>
                
                <div className="row" id="bar4">
                    <div className="col-6 leftone">
                        <div className="p-5 ml-5">
                        <h4>How To Connect</h4>
                        <Link to="/emails">
                        <h1>Connect with FPBSD Today <i className="fas fa-arrow-circle-right toemail"></i></h1>
                        </Link>
                        <p>We are here to assist you! We are able to provide breakfast/lunch, learning materials, vital school supplies, and more. Please don't hesitate to contact us; our email addresses are listed for your convenience.</p>
                        </div>

                    </div>
                    <div className="col-6 rightone">
                        <div className="p-5 mx-auto">
                        <h4>More Resources</h4>
                        <a href="https://www.fpbsd.org" target="blank">
                        <h1>FPBSD Site <i className="fas fa-arrow-circle-right toemail"></i></h1>
                        </a>
                        <p>Our School District website is a fantastic resource for parents. Please visit often.</p>
                        </div>

                    </div>
                    

                </div>
                <div className="row align-items-center mx-0 col-12 " id="bar5">
                    
                <iframe className="mx-auto py-5" width="670" height="420" src="https://www.youtube.com/embed/Jnhsk70XuCc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="mx-auto py-5" width="670" height="420" src="https://www.youtube.com/embed/n-Bj2LS9jSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                
                    
                </div>


            </div>
        )
    }
}
