import react, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Image } from "react-bootstrap";

import { categories } from "../data";
import {
    useLocation
} from "react-router-dom";

import { useNavigate } from 'react-router-dom';

function Categories() {
    
    const navigate = useNavigate()

    return (
        <CategoriesStyled>
            <Row className="heads1">
                <Col className="c1"><Image src="https://media.istockphoto.com/photos/diversity-collage-of-casual-people-talking-on-mobile-phone-full-body-picture-id1295996326?b=1&k=20&m=1295996326&s=170667a&w=0&h=Tgvp0-KfNoCIC2RU1rDouIaH47P7_N8pqt-630YdOJ0="/></Col>
                <Col className="c2 bt">
                    <h1 onClick={()=>navigate("/product")}>EXPLORE</h1>
                </Col>
            </Row>
            <Row className="heads">
                <Col className="c1"><h1>SHOP BY CATEGORIES</h1></Col>
            </Row>
            <Row className="catcardsr">
                {
                    categories.map((e) =>
                        <Col xs={8} sm={5} md={4} lg={4} xl={3} xxl={3} className="catcard" >

                            <Image src={e.img}  />
                            <div className="infodiv">
                                <h1>{e.title}</h1>
                                <div className="bt"
                                onClick={()=>navigate("/product/"+e.title.toLowerCase())}
                                > SHOP NOW</div>
                            </div>

                        </Col>

                    )
                }
            </Row>

        </CategoriesStyled>
    )
}
const CategoriesStyled = styled.div`
margin-top:1rem;
margin-bottom:1rem;

.heads1{
    position:relative;
    margin-top:1rem;
    margin-bottom:2rem;
    text-align: center;
    width: inherit;

    img{
        width: inherit;
    }
    .c2{
        position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
    }

    .bt{
        width: auto;
        border:none;
        padding: 10px;
        background-color: rgba(255,255,255,.7);
        color:black;
        cursor: pointer;
        font-weight: 600;
        text-align:center;
        &:hover{
            background-color: rgba(255,255,255,1);
        }
    }

}

.heads{
    text-align:center;
    h1{
        font-family: "Arial Black", sans-serif;
     font-size: 1.5em;
    letter-spacing: -1px;
    background-color: black;
    color: white;
    }
}
    .catcard{
        margin-top:.5rem;
        
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        position:relative;

        h1{
            color:white;
            text-align:center;
        }
        
    }

    .catcardsr{
        display: flex;
        align-items: center;
        justify-content: center;

        .infodiv{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        

        img{
            height:400px;
        }
        h3{
            text-align:center;
  
        }
        .bt{
            border:none;
            padding: 10px;
            background-color: rgba(255,255,255,.7);
            color:black;
            cursor: pointer;
            font-weight: 600;
            text-align:center;

            &:hover{
                background-color: rgba(255,255,255,1);
            }
        }
    }
`;

export default Categories
