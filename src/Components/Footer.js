import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <MDBFooter style={{backgroundColor: "#282c50", color:"#FFFFFF"}} className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                            <h4 className="title">Contact:</h4>
                                <p className="details">
                                    E-Mail: 9643321zapdos.com <br />
                                    Phone:  +91 8248696174 <br />
                                    Address: 101 A Baracah Road, <br />
                                            Chennai 600010, India.
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <h4 className="title">Important Links</h4>
                                    <ul className="details">
                                        <li>
                                            <a href="/home">Home</a>
                                        </li>
                                        <li>
                                            <a href="/illustrations">Illustrations</a>
                                        </li>
                                        <li>
                                            <a href="/simulator">Simulator</a>
                                        </li>                                        
                                    </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid className="center">
                            &copy; {new Date().getFullYear()} Copyright: <a href="http://www.hashincorp.com"><p className="center"> TheGoldenRatio.com </p></a>
                        </MDBContainer>
                    </div>
                </MDBFooter>                                
            </div>
        );
    }
}

export default Footer;