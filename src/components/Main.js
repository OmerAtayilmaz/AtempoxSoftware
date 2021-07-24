import React, { Component } from 'react'
import image from '../assets/images/man.png';
import image2 from '../assets/images/play.png';

export default class Main extends Component {
    render() {
        return (
            <div id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="promo-title">Learning The Software</p>
                            <p>Education without application is just entertainment.</p>
                            <a href="/#"><img  className="img-fluid" width="40px" src={image2} alt="img not found"></img>Watch Tutorials</a>
                        </div>
                        <div className="col-md-6">
                            <img src={image} className="img-fluid" alt="img not found"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
