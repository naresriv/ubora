import React from "react";
import "./MainPage.css";
import headerlogo from "./assets/headerlogo.png";
import {MdKeyboardArrowDown} from  "react-icons/md";
class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                 <div className="main-nav">
                    <nav className="navbar">
                        <div>
                        <img src={headerlogo}/>
                        </div>
                        <div className="anchor-a">
                        <a href="/" className="a1">Home </a>
                        <a href="/" className="a2">Our Services </a><MdKeyboardArrowDown/>
                        <a href="/" className="a2">How it works?</a>
                        {/* </div>
                        <div> */}
                            <button className="btn1">Join Now</button>
                            <button className="btn2">Login</button>
                        </div>
                    </nav>
            
                </div>
            </React.Fragment>
        )
    }
}
export default MainPage;