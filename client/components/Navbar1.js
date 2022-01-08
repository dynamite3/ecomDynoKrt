
import react, { useEffect, useState } from "react";
import { Col,Row } from "react-bootstrap";
import styled from "styled-components";

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router";

import { useSelector } from "react-redux";
import { flexbox } from "@mui/system";

import {logout} from '../redux/userRedux'
import { useDispatch } from "react-redux";

function Navbar() {
    const quantity= useSelector(state => state.cart.quantity)
    //console.log(quantity)
    
    const user = useSelector((state) => state.user.currentUser?.user);
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [nav,setnav]= useState(false)

    console.log(user)

    var w = window.innerWidth;
    if(w<800){
        setnav(true)
    }
    return (
        <NavbarStyled>
            <button className="sandwichbt"
            onClick={()=>{setnav(!nav)
                            if(w<800){
                                setnav(true)
                }
        }}
            >{nav?"=":"x"}  
            </button>
            <Row className={nav?"navc":"navcss"}>
                {/* <Col className="cl">   
                    <div className="searchContainer"><input placeholder="type something.."></input><SearchIcon/></div>
                </Col> */}
                <Col className="cm" >
                    <img src="https://cdn.dribbble.com/users/4675007/screenshots/9515578/dk_logo.png"></img>
                    <b onClick={()=>navigate("/")}>DynoKart</b>
                </Col>
                <Col className="cr">
                    <div
                    onClick={()=>navigate("/product")}
                    >Products</div>
                    <div
                    onClick={()=>navigate("/register")}
                    >Register</div>
                    {
                    !user ?
                    <div
                    onClick={()=>navigate("/login")}
                    >SignIn</div>
                    :""
                    }
                    {
                    user ?
                    <div
                    id ="avtrdiv"
                    style={{display:"flex",alignItems:"center",justifyContent:"center",gap:".5rem"}}
                    onClick={()=>navigate("/cart")}
                    > 
                    
                    <Avatar id ="avtr"sx={{ bgcolor:"black" }}>{user.userName[0]}</Avatar>
                    {user.userName}
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                    </div>

                    
                    :
                    ""
                    }
                    {
                        user ?
                        <div onClick={()=>dispatch(logout())}>
                        logout
                        </div>:""
                    }
                    
                </Col>
            </Row>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`

background:rgba(191, 191, 191,.6);
padding:.5rem;
display:flex;

.sandwichbt{

}

.navc{
    display:flex;
    margin: inherit;
    min-height:45px;
    width: -webkit-fill-available;

    .cm{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        cursor:pointer;
        img{
            height:40px;
            width:40px;
        }
    }
    
    .cr{
        display:flex;
        justify-content: right;
        align-items: center;
    
        div{
            margin-left:1rem;
            cursor:pointer;
            background:rgba(242, 241, 239,1) ;
            height: -webkit-fill-available;
            display:flex;
            align-items: center;
            justify-content: center;
            padding:6px;
    
            &:hover{
                background:black;
                color:white;
                padding:6px;
    
                #avtr{
                    background:white;
                    color:black;
                }
            }
        }
    }


}
.searchContainer{

}

.cl{
    display:flex;
    justify-content: left;
    align-items: center;
}



#avtr{
    background: black;
}

@media only screen and (max-width: 800px) {

    .sandwichbt{
        height: fit-content;
    }
    
    .navcss{
        display:flex;
    margin: inherit;
    min-height:45px;
    width: -webkit-fill-available;

        .cm{
            display:flex;
            justify-content: end;
            margin-top:1rem;
            margin-bottom:1rem;
            img{
                height:40px;
                width:40px;
            }
        }

        .cr{
            display:flex;
            flex-direction: column;
            align-items: flex-end;
            gap:1rem;

            div{
                width: inherit;
            }

            #avtr{    
                width: auto;
            }
        }
    }

  }


`;

export default Navbar


