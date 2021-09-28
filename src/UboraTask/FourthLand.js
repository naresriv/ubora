import React, { Component } from 'react'
import "./FourthLand.css";
import img4 from "./assets/img4.png";

class FourthLand extends Component {
    render() {
        return (
            <React.Fragment>
                <div className ="forth">
                    <div className="page4">
                        <h2>Our Care Givers</h2>
                        <h1> <b>Look for You</b></h1>
                        <button className="btn-5"></button>
                        <p>Certified nurses and medications will take care of you</p>
                        <button className="btn-6">Book day Care</button>
                    </div>
                    <div>
                        <img src={img4} className="image-4"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default FourthLand ;