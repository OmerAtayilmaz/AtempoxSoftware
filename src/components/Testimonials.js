import React, { Component } from 'react'
import person1 from '../assets/images/c1.png';
import person2 from '../assets/images/c2.png';
import person3 from '../assets/images/c4.png';

export default class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials">
            <div className="container">
              <h1 className="title text-center">WHAT CLIENTS SAY ?</h1>
              <div className="row offset-1">
                <div className="col-md-5 testimonials">
                  <p>You nailed it: you delivered on time and on budget and did so with grace and flexibility. You shined when it came to ease of the process and how you adapted when things don't go as planned. Your communication, understanding, and excitement make you stand out above other web firms.</p>
                  <img src={person1} alt="Img not found" className="img-fluid"/>
                  <p className="user-details"><b>Jennifer Aniston</b><br/>Co-founder at Rosservices</p>
                </div>
                <div className="col-md-5 testimonials">
                  <p>I’ve had some questionable experiences with other web agencies in the past, but Followbright has hands down been the best web company we’ve worked with, providing us with peace of mind and incredible service.</p>
                  <img src={person2} alt="Img not found" className="img-fluid"/>
                  <p className="user-details"><b>Neil Patrick Harris</b><br/>CEO at HIMYM</p>
                </div>
                <div class="col-md-5 testimonials">
                  <p>The Followbright team is absolutely fantastic to work with and I would highly recommend them no matter what type of project you have.</p>
                  <img src={person3} alt="Img not found" className="img-fluid"/>
                  <p class="user-details"><b>Kat Dennings</b><br/>Investor at Chestnut Soft.</p>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
