import react, { useEffect, useState } from "react";
import { Col,Row } from "react-bootstrap";
import styled from "styled-components";
import { categories } from "../data";

import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Categories from "./Categories";
import PopularProucts from "./PopularProucts";
import NewsLettter from "./NewsLettter";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import SingleProduct from "./SingleProduct";
import LoginPage from "./LoginPage";
import RegisterationPage from "./RegisterationPage";
import CartPage from "./CartPage"
function Homepage() {
    return (
        <HomeStyled>
            {/* <Announcement/> */}
            <Navbar/>
            <Slider/>
            <Categories/>

            <Row className="heads"><h1>✨POPULAR PRODUCTS✨</h1></Row>
            <PopularProucts popularflag={true}/>
            <NewsLettter/>
            <Footer/>
        </HomeStyled>

        // <ProductPage/>

        //<LoginPage/>
        //<RegisterationPage/>
        // <CartPage/>
        //<SingleProduct/>
    )
}

const HomeStyled = styled.div`
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
    
`;

export default Homepage