import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container col-12">
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
                <div className="row align-items-center">
                    <div className="col-4 mx-auto">
                        <h2>Helping our community</h2>
                        <p>We are dedicated to helping all members or the floral park bellrose school comminuity who are struggling through these troubling times. We encourage all those who are in need of support to utilize all of the available resources to make the most of your child's learning experience.</p>

                    </div>
                    <div className="col-4 mx-auto">
                    <img className="py-4" src={require('../logo111.jpg')} width="300px"></img>

                    </div>
                </div>
            </div>
        )
    }
}
