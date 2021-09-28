import React from 'react';
import "./SixthLand.css";
import  Appstore from "./assets/Appstore.png";
import mobile from "./assets/mobile.png";

 class SixthLand extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="sixth">
                    <div className="sixth-intro">
                        <h1>Want to explore Ubora Health?</h1>
                        <button className="btn-5"></button>
                    </div>
                    <div className="header">
                    <h1>DOWNLOAD    <span>OUR APP!</span></h1>
                    <img src={Appstore} className="apps"/>
                    </div>
                    <div className="mobile">
                        <img src={mobile}/>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
export default SixthLand;

