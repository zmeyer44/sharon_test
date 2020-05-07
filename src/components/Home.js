import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container col-12 mx-0" id="full">
                <div className="row hero">
                    <div className="container hero-inner">
                        <div className="row ">
                            <h1 className="text-title mx-auto hero-text col-7 text-center text-capitalize">The floral park bellerose school community is here to help</h1>
                        </div>
                        <div className="row ">
                            <h3 className="mx-auto col-7 text-center text-capitalize text-sub">with problems like stress, depression, or anxiety - For you or someone you care for.</h3>
                        </div>
                    </div>

                </div>

                <div className="row align-items-center mx-auto p-5" id="bar2">
                    <div className="col-10 col-md-4 mx-auto">
                        <h5>We are dedicated to</h5>
                        <h2>Helping our community</h2>
                        <p>We are dedicated to helping members or the Floral Park Bellerose School Community who are struggling through these troubling times. We encourage those who are in need of support to utilize the available resources.</p>

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
                <div className="row align-items-center mx-0 col-12" id="bar3">
                    <div className="container">
                        <div className="row my-5">
                        <div className="circle align-items-center">
                        <i className="fas fa-search fa-4x pin"></i>
                        </div>
                        <div className="col-7 info mx-auto">
                            
                            <h1 className="bar3title">Find Services  <i className="fas fa-arrow-circle-right"></i></h1>
                           <p className="bar3text">No matter what you're dealing with there are people who can help. Search our database for curriculum, behavioral, and emotional services that work for you.</p>
                            

                        </div>
                        </div>
                        <div className="row my-5">
                        <div className="circle align-items-center">
                        <i className="fas fa-address-card fa-4x pin"></i>
                        </div>
                        <div className="col-7 info mx-auto">
                            
                            <h1 className="bar3title">Important Contacts  <i className="fas fa-arrow-circle-right"></i></h1>
                           <p className="bar3text">If you feel unsure of who to reach out to for support, we invite you to visit our contacts page for a comprehensive list of staff members which may be helpful to you during this time.</p>
                            

                        </div>
                        </div>


                    </div>
                    
                </div>
                <div className="row" id="bar4">
                    <div className="col-6 leftone">
                        <div className="p-5 ml-5">
                        <h4>How To Call</h4>
                        <Link to="/">
                        <h1>Call FPBSD Today <i className="fas fa-arrow-circle-right"></i></h1>
                        </Link>
                        <p>We are here to assist you! We are able to provide lunches, learning materials, vital school supplies, and more. Our administrators are didicated to support you. Please don't hesitate to call us; our cell phone numbers are listed for your convenience.</p>
                        </div>

                    </div>
                    <div className="col-6 rightone">
                        <div className="p-5 ml-5">
                        <h4>What We Do</h4>
                        <h1>We Can Help <i className="fas fa-arrow-circle-right"></i></h1>
                        <p>We can assist you in anyway possible. We are capable of providing lunches, free learning materials, vital school supplies, etc. We are dedicated to making life as easy as can be while going through this pandemic and anyway we could help we will be happy to try!</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
