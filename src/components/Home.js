import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container col-12 mx-0 p-0" id="full">
                <div className="row hero">
                    <div className="container hero-inner">
                        <div className="row ">
                            <h1 className="text-title mx-auto hero-text col-7 text-center text-capitalize">The floral park bellerose school community is here to help</h1>
                        </div>
                        <div className="row ">
                            <h3 className="mx-auto col-7 text-center text-capitalize text-sub"></h3>
                        </div>
                    </div>

                </div>

                <div className="row align-items-center mx-auto py-5" id="bar2">
                    <div className="col-10 col-md-4 mx-auto">
                        <h5>We are dedicated to</h5>
                        <h2>Helping our community</h2>
                        <p>We are dedicated to helping members of the Floral Park Bellerose School Community who are struggling through these troubling times. We encourage those who are in need of support to utilize the available resources.</p>

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
                <div className="row align-items-center mx-0 col-12 " id="bar3">
                    
                    <iframe className="mx-auto my-5" width="560" height="315" src="https://www.youtube.com/embed/bfNOAN9KvU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                
                    
                </div>
                <div className="row" id="bar4">
                    <div className="col-12 leftone">
                        <div className="p-5 ml-5">
                        <h4>How To Connect</h4>
                        <Link to="/emails">
                        <h1>Connect with FPBSD Today <i className="fas fa-arrow-circle-right toemail"></i></h1>
                        </Link>
                        <p>We are here to assist you! We are able to provide breakfast/lunch, learning materials, vital school supplies, and more. Please don't hesitate to contact us; our email addresses are listed for your convenience.</p>
                        </div>

                    </div>
                    

                </div>
                <div className="row align-items-center mx-0 col-12 " id="bar5">
                    
                <iframe className='mx-auto p-5' width="560" height="315" src="https://embed.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend" width="854" height="480" frameborder="0" scrolling="no" allowfullscreen></iframe>


                
                    
                </div>


            </div>
        )
    }
}
