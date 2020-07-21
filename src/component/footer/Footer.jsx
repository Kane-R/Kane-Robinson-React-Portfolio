import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/Kano180'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/kane-robinson-viz360/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/maxbigwood/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/KaneTRobinson'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>I'm so busy these days</span>
                                        <h2>I need a <br /> call centre </h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>..not quite. Get in touch!</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Popular Links</h4>
                                                <ul className="ft-link">
                                                    <li><a href="https://github.com/Kane-R">GitHub</a></li>
                                                    <li><a href="https://www.linkedin.com/in/kane-robinson-viz360/">Linkedin</a></li>
                                                    <li><a href="https://www.facebook.com/Kano180">Facebook</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Emails & Socials</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:kane@kanestrades.com">kane@kanestrades.com</a></li>
                                                    <li><a href="mailto:kanerobinson2080@gmail.com">kanerobinson2080@gmail.com</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2020 Kane Robinson. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;