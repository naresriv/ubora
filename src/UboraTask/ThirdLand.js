import React from "react";
import "./ThirdLand.css";
import { MdVideocam } from "react-icons/md";
import msg from "./assets/msg.PNG";

class ThirdLand extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="thirdpage">
                    <div className="intro3">
                        <h1>Our Doctors <br /><span>Come to You</span></h1>
                        <button className="btn-5"></button>
                        <p>Connect to our experienced team of specialists anytime,<br />anywhere and get immediate medical advice via video <br />consultations and care chat.</p>
                    </div>
                    <div className="sel">
                        <div className="video">
                            <p><a href="/"><MdVideocam size="32px" /></a> <span>Video call with doctors </span></p>
                        </div>
                        <div className="msg">
                            <p><img src={msg} width="32px" height="32px" /> <span>Video call with doctors </span></p>
                        </div>
                    </div>
                 <button className="btn7">Book Appoitment</button>
                </div>
            </React.Fragment>
        )
    }
}
export default ThirdLand;