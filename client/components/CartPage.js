
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Image } from "react-bootstrap";

import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeProduct } from "../redux/cartRedux";
import { useNavigate } from "react-router";


import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


function CartPage() {

    //dialoug box




    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

    const [address,setAddress]=useState("")
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };



    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const wistlistcount = useSelector(state => state.wishlist?.products?.length)

    function removeItem(id, addedToCartAt, price, quantity) {
        //console.log(addedToCartAt.getTime())
        dispatch(removeProduct(
            {
                id,
                addedToCartAt: addedToCartAt,
                price,
                quantity
            })
        )

    }

    console.log(cart)

    function handleCheckout() {
        console.log(cart)
        navigate("/pay")
        //handleClickOpen()
    }

    // function makepayment(){
    //     console.log({cart,address})

    //     handleClose()
    // }

    useEffect(() => {
        
    }, [wistlistcount])

    if (cart)
        return (
            <CartPageStyled>
                <Navbar />

                <Row className="cpr1">
                    <Col className="cpr1c1"
                        onClick={() => navigate("/wishlist")}
                    >My wishlist </Col>
                    <Col className="cpr1c2"
                        onClick={() => navigate("/myhistory")}
                    >My history</Col>
                </Row>

                <Row className="yourcartr">
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} className="cartitems">
                        {
                            cart.products.map((e) =>
                                <Row className="cartitemcard">
                                    <Col className="cartitemcardc1">
                                        <Image className="cartitemimg" src={e.img} fluid />
                                    </Col>
                                    <Col className="cartitemcardc2">
                                        <div>
                                            <h4>{e.title}</h4>
                                            <p>{e.description}</p>
                                        </div>
                                        <div className="horidiv">
                                            <div>color : </div>
                                            <div className="colortiles">
                                                <div
                                                    style={{
                                                        height: "20px", width: "20px", borderRadius: "10px", backgroundColor: e.color
                                                    }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="horidiv">
                                            <div>size :  </div>
                                            <div className="value"> {e.size}</div>
                                        </div>
                                        <div className="horidiv">
                                            <div>quantity : </div>
                                            <div className="value">{e.quantity}</div>
                                        </div>
                                        <div className="horidiv">
                                            <div>cost : </div>
                                            <div className="value">Rs . {e.price}</div>
                                        </div>
                                        <div className="AddContainer"
                                            onClick={() => removeItem(e._id, e.addedToCartAt, e.price, e.quantity)}
                                        >
                                            <div className="addbt">
                                                REMOVE ITEM
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }


                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} className="checkoutcontainer">
                        <div className="checkoutbox">
                            <div className="title"> <b>Cart Summary</b> </div>
                            <div>itemlist</div>
                            <div className="items">
                                {
                                    cart.products.map((e, i) => <div>{i + 1}. <b>{e.title} </b>{`( c:${e.color} , s:${e.size} , q:${e.quantity}, total:${e.quantity * e.price} )`}</div>)
                                }
                            </div>

                            <div className="amounts">
                                <div>
                                    Subtotal : <b>Rs. {cart.total}</b>
                                </div>
                                <div>
                                    shipping charges :<b> Rs. 200</b>
                                </div>
                                <div>
                                    discount :<b> Rs. 200</b>
                                </div>
                            </div>

                            <h3>TOTAL : Rs. {cart.total}</h3>
                            <div className="checkout-bt"
                                onClick={() => handleCheckout()}
                            >
                                <Button variant="contained" color="success">
                                    CHECKOUT
                                </Button>
                            </div>

                        </div>

                    </Col>

                </Row>


                <Footer />

                {/* <SimpleDialog
                    open={open}
                    address={address}
                    setAddress={setAddress}
                    onClose={handleClose}
                    makepayment={makepayment}
                /> */}
            </CartPageStyled>


        )
    else
        return (<div>loading...</div>)
}


function SimpleDialog(props) {
    const { onClose, selectedValue, open,setAddress,makepayment,address } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set up delivery information </DialogTitle>
            <div style={{display:"flex",flexDirection:"column" ,margin:".5rem",padding:"1rem",gap:".5rem",alignItems:"center"}}>
                    <textarea
                    onChange={(e)=>setAddress(e.target.value)}
                    placeholder="enter your delivery address"
                    rows="3"
                    style={{width:"-webkit-fill-available"}}
                    >
                    </textarea>
                    <div
                    style={{    background: "blueviolet",
                        color: "azure",display:"flex",alignItems:"center",
                        padding: "5px",
                        width: "fit-content"}}

                    onClick={()=>
                        {
                            address ? makepayment() : alert("enter proper address")
                        }
                        }
                    >PROCEED</div>
            </div>
        </Dialog>
    );
}


const CartPageStyled = styled.div`
.cpr1{
    .cpr1c1{
        display:flex;
        border:1px solid;
        background:rgba(236, 236, 236, .7);
        color:black;
        align-items: center;
        justify-content: center;
        margin:1rem;
        cursor:pointer;
    }
    .cpr1c2{
        display:flex;
        border:1px solid;
        background:rgba(236, 236, 236, .7);
        color:black;
        align-items: center;
        justify-content: center;
        margin:1rem;
        cursor:pointer;
    }

}

.AddContainer{
    margin:2rem;
    text-align:center;
    
    .addbt{
        background:grey;
        padding:5px;
        color: aliceblue;
        &:hover{
            background:black;
        }
    }
}
.yourcartr
{
    min-height:500px;
}


.cartitemimg{
    height:300px;
    width:300px;
    display:flex;
    justify-content: center;
    align-items: center;
}

.cartitemcard{
    margin:2px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .cartitemcardc1{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
}

.horidiv{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap:1rem;

    .value{
        font-size: x-large;
        font-weight: 700;
    }
}

.colortiles{
    display:flex;
    gap:.5rem;
    div{
    border: 2px solid grey;
    opacity:.6;
    &:hover{
    opacity:1;  
    }
    }
}


.checkoutcontainer{
    background:rgba(108, 122, 137,.7);
    display:flex;
    justify-content: center;
    align-items: center;

    .checkoutbox{
        width:100%;
        min-height:50vh;
        padding:.5rem;
        margin:1rem;
        background: rgba(210, 215, 211,1);
        display:flex;
        flex-direction: column;
        
        border-radius:.5rem;

        button{
            width: fit-content;
        }
        .title{
            display:flex;
            justify-content: center;
        }

        .items{
            margin-top: auto;
            font-family: cursive;
        }

        .amounts{
            display:flex;
            flex-direction:column;
            justify-content: center;
            margin-top: auto;
            font-family: monospace;


            margin-bottom:1rem;
            border-bottom:2px solid black;
        }
        .checkout-bt{
            margin-top:auto;
            margin-bottom:1rem;
            display:flex;
            justify-content: center;
        }



    }
    }
}

`;

export default CartPage
