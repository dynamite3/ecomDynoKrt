import react, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";


function Announcement() {
    return (
        <AnnouncementStyled>
            <div id="scroll-container">
                <div id="scroll-text"> Super Deals ! Free Shipping on ordes abouve Rs.500</div>
                </div>
                   
                </AnnouncementStyled>
                )
}

                const AnnouncementStyled = styled.div`
                color:white;
                background: #50bcbc;
                display: flex;
                justify-content: center;
                align-items: center;

                #scroll-container {
                    width: -webkit-fill-available;
                    border-radius: 5px;
                    overflow: hidden;
                  }
                  
                  #scroll-text {
                    /* animation properties */
                    -moz-transform: translateX(100%);
                    -webkit-transform: translateX(100%);
                    transform: translateX(100%);
                    
                    -moz-animation: my-animation 10s linear infinite;
                    -webkit-animation: my-animation 10s linear infinite;
                    animation: my-animation 10s linear infinite;
                  }
                  
                  /* for Firefox */
                  @-moz-keyframes my-animation {
                    from { -moz-transform: translateX(100%); }
                    to { -moz-transform: translateX(-100%); }
                  }
                  
                  /* for Chrome */
                  @-webkit-keyframes my-animation {
                    from { -webkit-transform: translateX(100%); }
                    to { -webkit-transform: translateX(-100%); }
                  }
                  
                  @keyframes my-animation {
                    from {
                      -moz-transform: translateX(100%);
                      -webkit-transform: translateX(100%);
                      transform: translateX(100%);
                    }
                    to {
                      -moz-transform: translateX(-100%);
                      -webkit-transform: translateX(-100%);
                      transform: translateX(-100%);
                    }
                  

                `;

                export default Announcement