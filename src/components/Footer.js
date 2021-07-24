import React, { Component } from 'react'
import img1 from '../assets/images/wave2.png';
import img2 from '../assets/images/logom.png';

  class Footer extends Component {
    render() {
        return (
            <section>
            <section id="social-media">
                <div className="container text-center">
                <p>FIND US ON SOCIAL MEDIA</p>
                <div className="social-icons">
                    <a href="/#"><i className="fa fa-3x ml-5 fa-linkedin"></i></a>
                    <a href="/#"><i className="fa fa-3x ml-5 fa-facebook"></i></a>
                    <a href="/#"><i className="fa fa-3x ml-5 fa-youtube"></i></a>
                    <a href="/#"><i className="fa fa-3x ml-5 fa-instagram"></i></a>
                    <a href="/#"><i className="fa fa-3x ml-5 fa-linkedin"></i></a>
                </div>
                </div>
                </section>

                <section id="footer">
                <img src={img1}  className="img-fluid" alt="img not found"/>
                <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-box">
                    <img src={img2}  className="img-fluid" alt="img not found"/>
                    <p>Subscribe Ömer Atayilmaz YouTube Channel to watch more video on website development, Digital Marketing, Wordpress and graphics Designing</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column float-left footer-box">
                    <p><b>CONTACT US</b></p>
                    <p><i className="fa fa-map-marker"></i> World Trade Centre, California</p>
                    <p><i className="fa fa-phone"></i> +90 555 999 99 99</p>
                    <p><i className="fa fa-envelope-o"></i> atay.omer33@gmail.com</p>
                    </div>

                    <div className="col-md-4 footer-box">
                    <p><b>SUBSCRIBE NEWSLETTER</b></p>
                    <input type="email" className="form-control" placeholder="Your Email"/>
                    <button type="button" className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
                <hr/>
                <p className="copyright">Website Created by Atempox Software</p>
                </div>
                </section>
            </section>
        )
    }
}
export default Footer;
