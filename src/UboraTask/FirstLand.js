import React from "react";
import "./FirstLand.css";
import Homebg from"./assets/Homebg.png";
import img1 from"./assets/img1.jpeg";
import cur from "./assets/cur.png";
import arrow from "./assets/arrow.png";


class FirstLand extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="main-landing">
                    <div className="intro">
                        <h1>Take best quality <br/>Service for Telehealth.</h1>
                    </div>
                    <p>Ubora has been such a blessing for me and my family. Ubora has been such a blessing for<br/>
                         me and my family. Ubora has been such a blessing for me and my family. Ubora has been<br/>
                          such a blessing for me and my family.</p>
                          <button className="btn3">Book Appoitment</button>
                           <button className="btn4">Learn more</button>
                        <div>
                            <img src={img1} className="doctor"/>
                            <img src={cur} className="cur"/>
                            <img src={arrow} className="arrow"/>
                        </div>
                        
                </div>
                
            </React.Fragment>
        );
    }
}
export default FirstLand;