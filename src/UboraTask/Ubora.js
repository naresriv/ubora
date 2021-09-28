import React from "react";
import FirstLand from "./FirstLand";
import MainPage from "./MainPgae";
import SecondLand  from "./SecondLand";
import ThirdLand from "./ThirdLand";
import FourthLand from "./FourthLand";
import "./Ubora.css";
import FifthLand from "./FifthLand";
import SixthLand from "./SixthLand";
import Footer from "./Footer";



class Ubora extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className ="main-conatiner">
                 <MainPage/>
                 <FirstLand/>
                 <SecondLand/>
                 <ThirdLand/>
                 <FourthLand/>
                 <FifthLand/>
                 <SixthLand/>
                 <Footer/>
                </div>  
            </React.Fragment>
        )
    }
}
export default Ubora;