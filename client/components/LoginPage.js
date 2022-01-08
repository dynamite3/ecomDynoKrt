import { Button } from "@mui/material";
import react, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import { useSelector } from "react-redux";

import { apiendpoint } from "../App";
import { useNavigate } from "react-router";
import { getAllProduct } from "../redux/wishlistRedux";


function LoginPage() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {isFetching,error}=useSelector(state => state.user)

    const dispatch = useDispatch()

    const navigate = useNavigate()
    

    function getwishlist(id){
        
        fetch(apiendpoint+"/wishlist/userswishlist",
            {
                method: "POST",
                headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
                body: JSON.stringify(
                    {
                        id,
                    }),
            })
            .then((data) => data.json())
            .then((d)=>dispatch(getAllProduct(d)))
        
    }
    

    function handleSubmit(){
        console.log({username,password})
        dispatch(loginStart())
        fetch(apiendpoint+"/auth/login",
        {
            method: "POST",
            headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
            body: JSON.stringify(
                {
                    email:username,
                    password: password
                }),
        })
        .then((data) => data.json())
        .then((data)=>{
            
            if(data.success)
            {
                dispatch(loginSuccess(data))  
                getwishlist(data.user._id)
            }
            else    
                dispatch(loginFailure())
        })
        
    }

    return (
        <>
        <Navbar/>
        <LoginPageStyled>
            
            <Row className="maindiv">
                <Col sm={12} md={8} lg={7} xl={6} xxl={6}>
                    <h1>Sign up</h1>
                    <form className="formdiv">
                        <input 
                        autoComplete="on"
                        onChange={(e)=>setUsername(e.target.value)}
                        placeholder="username"/>
                        <input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        placeholder="password"/>
                        <Button 
                        onClick={()=>handleSubmit()}
                        variant="contained" 
                        disabled={isFetching ? true :false}
                        >
                            Submit
                        </Button>
                    </form>
                    {/* <p>forget password ? click here</p> */}
                    <p
                    onClick={()=>navigate("/register")}
                    >not user ? register here..</p>

                    { error? <h3 style={{color:"red"}}>INVLAID CREDENTIALS</h3>:"" }

                    
                </Col>
                
            </Row>
            
        </LoginPageStyled>
        </>
    )
}

const LoginPageStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),url("https://www.expatica.com/app/uploads/sites/11/2014/05/Shopping.jpg ")center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .maindiv{
        width: 60%;
        padding: 20px;
        background-color:rgba(238, 238, 238,.7);
        display:flex;
        align-items: center;
        justify-content: center;
    }
    @media only screen and (min-width: 900px) {
        .maindiv {
            width: 50%;
        }
      }
    @media only screen and (max-width: 600px) {
        .maindiv {
            width: 90%;
        }
      }

    h1{
        font-size: 24px;
        font-weight: 300;
    }
    p{
        margin-top:1rem;
        color:green;
    }

    .formdiv{
        display:flex;
        flex-direction:column;
        gap:1rem;
    }

`;

export default LoginPage
