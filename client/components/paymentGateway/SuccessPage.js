import react, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled from "styled-components";

function SuccessPage() {

    const navigate=useNavigate()
    return (
        <SuccessPageStyled>
            <div class="card">
                <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
                    <i class="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
            </div>

            <h3>to continue shopping click here</h3>
            <div className="bt"
            onClick={()=>navigate("/")}
            >SHOP MORE</div>
        </SuccessPageStyled>
    )
}

const SuccessPageStyled = styled.div`
    text-align: center;
    padding: 40px 0;
    background: #EBF0F5;

    display: flex;
    flex-direction: column;
    align-items: center;


    .bt{
        background: blueviolet;
        color: antiquewhite;
        width: max-content;
        padding: 10px;
        &:hover{
            background: chocolate;

        }
    }


    
    h1 {
        color: #88B04B;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 10px;
      }

    h3{
        margin-top:1rem;
        color:darkgray;;
    }
      p {
        color: #404F5E;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-size:20px;
        margin: 0;
      }
    i {
      color: #9ABC66;
      font-size: 100px;
      line-height: 200px;
      margin-left:-15px;
    }
    .card {
      background: white;
      padding: 60px;
      border-radius: 4px;
      box-shadow: 0 2px 3px #C8D0D8;
      display: inline-block;
      margin: 0 auto;
    }

`;

export default SuccessPage
