import react, { useEffect, useState } from "react";
import { Col,Row } from "react-bootstrap";
import styled from "styled-components";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <FooterStyled>
            <Row className="frow1">
                
                <Col  xs={4} sm={4} md={3} lg={3} xl={3} xxl={3} className="item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                </Col>
                <Col xs={4}  sm={4} md={3} lg={3} xl={3} xxl={3} className="item">
                <h3>Services</h3>
                        <ul>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Selling</a></li>
                        </ul>
                </Col>
                <Col  xs={8} sm={8} md={3} lg={4} xl={4} xxl={4} className="item text">
                        <h3>DynaKart</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                            Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Aliquam in arcu eget velit
                             pulvinar dictum vel in justo.
                        </p>
                </Col>
        
            </Row>
            <Row className="iconlinks">
                <InstagramIcon onClick={()=>window.location.href = "https://www.instagram.com/"}/>
                <FacebookIcon onClick={()=>window.location.href = "https://www.facebook.com/"}/>
                <TwitterIcon onClick={()=>window.location.href = "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"}/>
            </Row>
            
            <Row>
                <p class="copyright">DynaKart © 2021</p>
            </Row>
            
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
margin-bottom:1rem;
margin-top:1rem;
padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;

.frow1{
    display:flex;
    justify-content: center;
}

.iconlinks{
    svg{
        color:white;
        font-size: 60px;
        cursor:pointer;
        opacity:.6;
        &:hover{
            opacity:1;
        }
    }
    display:flex;
    justify-content: center;
    
}
ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
  }
ul a {
    color:inherit;
    text-decoration:none;
    opacity:0.6;
  }
ul a:hover {
    opacity:0.8;
  }

.copyright {
    text-align:center;
    padding-top:24px;
    opacity:0.3;
    font-size:13px;
    margin-bottom:0;
  }

.item{
    display:flex;
    justify-content: flex-start;
    flex-direction:column;
    align-items: flex-start;
    margin-top:1rem;

}
@media only screen and (max-width: 600px) {
    .item {
        align-items: center;
    }
    .text{
        padding:2rem;
    }
  }
  
`;

export default Footer
