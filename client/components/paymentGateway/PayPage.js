import react, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import StripeCheckout from 'react-stripe-checkout';
import { apiendpoint } from "../../App";
import { Navigate, useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartRedux";

function PayPage() {

    const [stripeToken,setStripeToken]=useState(null)
    const navigate=useNavigate()

    const user = useSelector(state => state.user.currentUser.user)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    function addtoOrders(data){
        fetch(apiendpoint+"/order",
            {
                method: "POST",
                headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
                body: JSON.stringify(data)
            })
            .then((data) => data.json())
            .then((d)=>console.log(d))
    }

    function makepayment(){
        try{
            fetch(apiendpoint+"/stripe/payment",
            {
                method: "POST",
                headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
                body: JSON.stringify(
                    {
                        tokenId:stripeToken.id,
                        amount:cart.total,
                    }),
            })
            .then((data) => data.json())
            .then((d)=>
                {
                    const data={
                        transcation:d,
                        foruser:user,
                        items:cart
                    }
                    addtoOrders(data)
                    dispatch(clearCart())
                })
            .then(()=>navigate("/success"))
          }
          catch(err){
            console.log(err)
          }

    }
    

    useEffect(() => {
        console.log(stripeToken)
        if(stripeToken)
            makepayment()
    }, [stripeToken])

    const onToken = (token) =>{
        setStripeToken(token)
    }

    return (
        <PayPageStyled>

            
            <StripeCheckout
               name="Dyno Cart"
               image="./DKlogo.png"
               shippingAddress
               billingAddress
               description={"your total is Rs "+cart.total}
               amount={cart.total}
               currency="USD"
               token={onToken}
               stripeKey="pk_test_51KARhtSHQxcjbnPLaNqAbiJgyCQN6NhMQYVDZBYNgVmaHVzf4DnXoA1GjZRMYaCJHNRIXWuQZs1QC4Cw20vSAMRQ0067vgp3R0"
            >
                <div>
                    PAY NOW
                </div>
            </StripeCheckout>

        </PayPageStyled>
    )
}


const PayPageStyled = styled.div`
height:100vh;
display:flex;
align-items:center;
justify-content:center;

div{
    
    border-radius:5px;
    padding:1rem;
    font-weight:600;
    cursor:pointer;
    background: springgreen;
    color: brown;
}

`;

export default PayPage
