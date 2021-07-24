import React, { Component } from 'react';
import img from '../assets/images/network.png';
export default class About extends Component {
    render() {
        return (
            <section id="about-us">
      <div className="container">
        <h1 className="title text-center">WHY CHOOSE US?</h1>
        <div className="row">
          <div className="col-md-6 about-us">
            <p className="about-title">Why we are different</p>
              <ul>
                <li>Believe in doing business with honbesty</li>
                <li>Believe in doing business with honbesty</li>
                <li>Believe in doing business with honbesty</li>
                <li>Believe in doing business with honbesty</li>
                <li>Believe in doing business with honbesty</li>
              </ul>
          </div>
          <div className="col-md-6">
           <img src={img} className="img-fluid" alt="img not found"/>
          </div>
        </div>
      </div>
    </section>
        )
    }
}
