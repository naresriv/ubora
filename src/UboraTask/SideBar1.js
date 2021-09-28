import React from "react";
import "./SideBar1.css";
import { MdFolder, MdGpsOff, MdHome, MdOpenInBrowser, MdOpenInNew, MdPlusOne, MdPortableWifiOff, MdPower, MdSecurity, MdSwapVerticalCircle, MdSwitchCamera } from "react-icons/md";
import LandingPage from "./LandingPage";
import RightSideBar from "./RightSideBar";
import TablePage from "./TablePage";
import { Link } from "react-router-dom";
import SecondPage from "./SecondPage";
import Home from "./Home";
class SideBar1 extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'Home'
        }
    }

    changePage = (e) => {
        console.log('e', e)
        this.setState({ page: e })
    }

    render() {
        const { page } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className='icon1' onClick={() => this.changePage('Home')}>
                                        {/* <Link to={`/home`}> */}
                                        < MdHome className="home" size="30px" onClick="SecondPage" /><p>Home</p>
                                        {/* </Link> */}
                                    </div>
                                    <div className='icon2' onClick={() => this.changePage('Reports')}>
                                        {/* <Link to={`/reports`} //onClick={this.changeRoutePath()}> */}
                                        <MdFolder className="home2" size="30px" /><p>Reports</p>
                                        {/* </Link> */}
                                    </div>
                                    <div className='img'>
                                        <img className="img1" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:3b16383c-3476-4393-bc1a-f97f03485ba4;revision=0?component_id=b6ed669d-9bdf-43b9-b58d-30201b66f48a&api_key=CometServer1&access_token=1627318417_urn%3Aaaid%3Asc%3AUS%3A3b16383c-3476-4393-bc1a-f97f03485ba4%3Bpublic_9a81d457cf82bbdcdc1be8a3a67f89047794cad1" size="40px" width="50px" height="50px" />
                                        <br />
                                        <span>Machel Jordan</span>
                                    </div>
                                    <div className='icon3'>
                                        <MdOpenInBrowser className="home3" size="40px" />
                                        <span className="logout" color>LogOut</span>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>
                <div className="flex">          
              {page == 'Home' ? <Home /> : <SecondPage />}
              </div>

            </React.Fragment>

        );

    }

}
export default SideBar1;