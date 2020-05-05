import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container col-12 mx-0" id="full">
                <div className="row hero">
                    <div className="container hero-inner">
                        <div className="row ">
                            <h1 className="text-title mx-auto hero-text col-7 text-center text-capitalize">The floral park bellrose school community is here to help</h1>
                        </div>
                        <div className="row ">
                            <h3 className="mx-auto col-7 text-center text-capitalize text-sub">with problems like stress, depression, or anxiety. For you or someone you care for.</h3>
                        </div>
                    </div>

                </div>

                <div className="row align-items-center mx-auto" id="bar2">
                    <div className="col-10 col-md-4 mx-auto">
                        <h5>We are dedicated to</h5>
                        <h2>Helping our community</h2>
                        <p>We are dedicated to helping all members or the floral park bellrose school comminuity who are struggling through these troubling times. We encourage all those who are in need of support to utilize all of the available resources to make the most of your child's learning experience.</p>

                    </div>
                    <div className="col-10 col-md-4 mx-auto">
                    <img className="py-4 mx-auto" src={require('../logo111.jpg')} width="300px"></img>

                    </div>
                </div>
                <div className="row align-items-center mx-0 col-12" id="bar3">
                    <div className="container">
                        <div className="row">
                        <div className="circle align-items-center">
                        <i className="fas fa-search fa-4x pin"></i>
                        </div>
                        </div>


                    </div>
                    
                </div>
            </div>
        )
    }
}
