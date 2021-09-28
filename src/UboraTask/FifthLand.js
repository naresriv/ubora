import React, { Component } from 'react'
import "./FifthLand.css";
import dots from "./assets/dots.PNG";
import testimonail from "./assets/testimonail.png";

export default class FifthLand extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="fifth-page">
                    <div className="page5">
                         <h2>Our</h2>
                        <h1><b>Happy Patients</b></h1>
                        <button className="btn-5"></button>
                   <p>  “Ubora has been such a blessing for me and my family. Me and my siblings <br/>
                        all live in different states and our elderly parents need help in going to doctor’s <br/>
                        visits, doing household chores, and need assistance in so many other things <br/>
                        due to their age. We were able to find all the services our parents <br/>
                        needed all in one place! “ <br/>  <span>- Jennifer Smith</span> </p>
                        <img src={dots} className="dots"/>        
                    </div>
                    {/* <div className="test">
                        <img src={testimonail}/>
                    </div> */}
                </div>  
            </React.Fragment>
        )
    }
}
