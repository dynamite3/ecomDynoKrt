import react, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { Image } from "react-bootstrap";


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PageviewIcon from '@mui/icons-material/Pageview';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useNavigate } from "react-router";

import { apiendpoint } from "../App";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../redux/wishlistRedux";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


function PopularProucts({ category, filters, sort, popularflag }) {

    // console.log({category})
    // console.log(filters)
    // console.log({sort})
    const popular = ["61c6b909dbc9876423f5f0f3", "61c6ba1bdbc9876423f5f111", "61c6b918dbc9876423f5f0f5", "61c6b9e4dbc9876423f5f10b", "61c6b94bdbc9876423f5f0ff", "61c6b9c1dbc9876423f5f107", '61c6ba01dbc9876423f5f10f', '61c6ba36dbc9876423f5f117']

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [filteredproducts, setfilteredproducts] = useState([])

    const user = useSelector((state) => state.user.currentUser?.user);
    //console.log(user)


    function getAllProducts() {


        fetch(
            category ?
                apiendpoint + "/product/" + category :
                apiendpoint + "/product",
            {
                method: "GET",
                headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
            })
            .then((d) => d.json())
            .then((d) => setProducts(d))

    }

    //console.log(products)

    function handleAddToWishlist(e) {
        if (user) {
            fetch(apiendpoint + "/wishlist",
                {
                    method: "POST",
                    headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
                    body: JSON.stringify(
                        {
                            wishlistByuserId: user._id,
                            wishlistedItem: e
                        }),
                })
                .then((data) => data.json())

        }

    }

    useEffect(() => {
        getAllProducts()

    }, [category])

    useEffect(() => {
        if (sort == "")
            setfilteredproducts(
                products.filter((e) => Object.entries(filters).
                    every(([key, value]) => e[key].includes(value))
                )
            )
        if (sort == "asc")
            setfilteredproducts(prev => [...prev].sort((a, b) => a.price - b.price))
        if (sort == "desc")
            setfilteredproducts(prev => [...prev].sort((a, b) => b.price - a.price))

    }, [sort])

    useEffect(() => {
        if (filters) {
            setfilteredproducts(
                products.filter((e) => Object.entries(filters).
                    every(([key, value]) => e[key].includes(value))
                )
            )
        }

    }, [category, filters, products])


    

    return (
        <PopularProuctsStyled>

            <Row className="ppcardsrow">
                {
                    popularflag ?
                        products.filter((e) => popular.includes(e._id)).map((e) =>
                            <>
                                <Col className="ppcardtile" xs={10} sm={5} md={3} lg={3} xl={3} xxl={3}>

                                    <Image src={e.img} fluid style={{ marginTop: "4px" }} />

                                    <div className="title">{e.title}</div>
                                    <div className="pricetag"> Rs. {e.price}</div>

                                    <div className="options">
                                        <div className="opt"
                                            onClick={() => navigate("/product/item/" + e._id)}
                                        ><ShoppingCartIcon /></div>
                                        <div className="opt"
                                             onClick={() => window.open(e.img, "_blank")}
                                        ><PageviewIcon /></div>
                                        <div className="opt"
                                            onClick={() => handleAddToWishlist(e)}
                                        ><FavoriteBorderIcon /></div>
                                    </div>
                                </Col>

                            </>

                        )
                        :

                        filters || sort ?
                            filteredproducts.map((e) =>
                                <>
                                    <Col className="ppcardtile" xs={10} sm={5} md={3} lg={3} xl={3} xxl={3}>

                                        <Image src={e.img} fluid />

                                        <div className="title">{e.title}</div>
                                        <div className="pricetag"> Rs. {e.price}</div>

                                        <div className="options">
                                            <div className="opt"
                                                onClick={() => navigate("/product/item/" + e._id)}
                                            ><ShoppingCartIcon /></div>
                                            <div className="opt"
                                                 onClick={() => window.open(e.img, "_blank")}
                                            ><PageviewIcon /></div>
                                            <div className="opt"><FavoriteBorderIcon
                                                onClick={() => handleAddToWishlist(e)}
                                            /></div>
                                        </div>
                                    </Col>
                                </>

                            )


                            :
                            products.map((e) =>
                                <>
                                    <Col className="ppcardtile" xs={10} sm={5} md={3} lg={3} xl={3} xxl={3}>

                                        <Image src={e.img} fluid style={{ marginTop: "4px" }} />

                                        <div className="title">{e.title}</div>
                                        <div className="pricetag"> Rs. {e.price}</div>

                                        <div className="options">
                                            <div className="opt"
                                                onClick={() => navigate("/product/item/" + e._id)}
                                            ><ShoppingCartIcon /></div>
                                            <div className="opt"
                                             onClick={() => window.open(e.img, "_blank")}
                                            ><PageviewIcon /></div>
                                            <div className="opt"
                                                onClick={() => handleAddToWishlist(e)}
                                            ><FavoriteBorderIcon /></div>
                                        </div>
                                    </Col>
                                </>

                            )

                }
            </Row>


        </PopularProuctsStyled>
    )
}

const PopularProuctsStyled = styled.div`
                margin-top:3rem;
                margin-bottom:3rem;

                .ppcardsrow{
                    display:flex;
                align-items: center;
                justify-content: center;
                

            }

                .ppcardtile{
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-content: center;
                    align-items: center;
                    padding-top: 1rem;
                    padding-bottom: 1rem;


                text-align:center;
                background:rgba(189, 195, 199,.3);
                margin:8px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

                img{
                    height:200px;
                width:200px;
        
                }

                &:hover{
                    img{
                    opacity:.5;
                }
                .title{
                    opacity:.3;
            }
            .pricetag{ 
                opacity:.3;
            
            }
                }



                .options{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display:none;

                padding:.5rem;

                color:white;

                .opt{
                    background:black;
                padding:4px;
                border-radius:50%;
                &:hover{
                    transform:scale(1.2)
            }
        }
    }

                &:hover{
                .options{
                    display:flex;
                gap:5px;
                cursor:pointer;  
        }
    }
}

                .title{
                        font-family: sans-serif;
                        font-weight: bold;
                        text-decoration: underline;
                        width: -webkit-fill-available;
                    
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: clip;
                }
                .pricetag{ 
                background: brown;
                color: bisque;
                width: fit-content;
                padding: 4px;
                
                }

}


                `;


                

export default PopularProucts
