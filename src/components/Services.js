import React, { Component } from 'react'
import img1 from '../assets/images/s1.png';
import img2 from '../assets/images/s2.png';
import img3 from '../assets/images/s3.png';
export default class Services extends Component {
    render() {
        return (
            <section id="services">
            <div className="container text-center">
              <h1 className="title">WHAT WE DO ?</h1>
              <div className="row text-center">
                <div className="col-md-4 services">
                  <img src={img1} alt="Img not found" className="img-fluid"/>
                  <h4>Growth Marketing</h4>
                  <p>Growth Marketing is the process of designing and conducting experiments to optimize and improve the results of a target area. If you have a certain metric you want to increase, growth marketing is a method you can utilize to achieve that</p>
                </div>
                <div className="col-md-4 services">
                  <img src={img2} alt="Img not found" className="img-fluid"/>
                  <h4>Online Branding</h4>
                  <p>Internet branding (also referred to as Online branding) is a brand management technique that uses the World Wide Web & Social Media Channels as a medium for positioning a brand in the marketplace. Branding is increasingly important with the advancements of the internet.</p>
                </div>
                <div className="col-md-4 services">
                  <img src={img3} alt="Img not found" className="img-fluid"/>
                  <h4>Animated Ads</h4>
                  <p>An animated ad is a 5-10 second looped image or video which is used in online marketing. ... These ads are created as animated Gifs, HTML 5 Banners, flash animation and short videos.</p>
                </div>
              </div>
              <button type="button" className="btn btn-primary">All Services</button>
            </div>
          </section>
        )
    }
}
