import React from "react";
import "./SecondLand.css";
import seniorcare from "./assets/seniorcare.png";

class SecondLand extends React.Component{
    render() {
        return (
            <React.Fragment>
                 <div className="second-land">
                 <div className="sec-intro">
                        <h1>Your Family’s Trusted <br/>
                        <b>Senior Care</b></h1> 
                        <button className="btn-5"></button>
                        <p>Certified doctors and medications at senior care centres</p>
                        <button className="btn-6">Book day Care</button>
                    </div>
                    {/* <div>
                        <img src={seniorcare} className="senior"/>
                    </div> */}

                 </div>  
            </React.Fragment>
        );
    }
}
export default SecondLand;