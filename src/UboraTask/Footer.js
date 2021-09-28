import React, { Component } from 'react'
import "./Footer.css";
import footerlogo from "./assets/footerlogo.png";
import line from "./assets/line.PNG";
import {MdCopyright} from "react-icons/md";

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="footer-intro">
                        <p><img src={footerlogo} /></p>
                        {/* <div className="foot-detail"> */}
                            <div className="info">
                                <p className="dt"><b>Tel </b><span >0123456789</span></p>
                                <p className="dt"><b>Hotline </b><span>0123456789</span></p>
                                <p className="dt"><b>Email </b><span>support@uborahealth.com</span></p>
                            </div>
                            <div className="services">
                                <h5><b>Services</b></h5>
                                <p>Tele Health</p>
                                <p>Senior Care</p>
                                <p>Transportation</p>
                                <p>Pharmacy</p>
                                <p>Medical Supplies</p>
                            </div>
                            <div className="support">
                                <h5><b>Customer Support</b></h5>
                                <p>FAQs</p>
                                <p>Support</p>
                                <p>About us</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        {/* </div> */}
                        <img src={line} className="f-img"/>
  <div className="bor">                      
                        <div className="below">
                                 <h5>UBORA HEALTH</h5>
                                <p>Ubora Health is a Medical service Which gives all service needs <br/>At one place.</p>  
                        </div>
                        <div className="below2">
                                 <h5>Address</h5>
                                <p>30 New Jersey, New Jersey, New Jersey <br/>New Jersey USA.</p>  
                          </div>
</div>
                          <div className="copy">       
                          <span> <MdCopyright className="c-img" size="30px"/></span> <p>Uborahealth | All rights reserved 2020 </p>
                              </div>    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
