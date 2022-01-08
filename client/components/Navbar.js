import { style } from 'dom-helpers';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useParams,
    NavLink
} from "react-router-dom";
import styled from "styled-components";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useSelector } from "react-redux";

import { logout } from '../redux/userRedux'
import { useDispatch } from "react-redux";

export function NavBar() {



    const [sidebar, setsidebar] = useState(false)
    const quantity = useSelector(state => state.cart.quantity)
    const showsidebar = () => {
        setsidebar(!sidebar)
    }
    const dispatch = useDispatch()
    var navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser?.user);
    return (

        <NavBarStyled>


            <div className="container-fluid nc">
                <div className="row nr">

                    <div className="U-navbar">

                        <div className="brand" onClick={() => navigate("/")}>
                            <img src='./DKlogo.png' />
                            <b>DynaKart</b>
                        </div>

                        <ul>

                            <li>
                                <Link to="/product" exact >
                                    PRODUCTS
                                </Link>
                            </li>

                            <li>
                                <Link to="/register" exact>
                                    REGISTER
                                </Link>
                            </li>
                            {
                                !user ?
                                    <li>
                                        <Link to="/login" exact>
                                            SIGN-IN
                                        </Link>
                                    </li>
                                    : ""
                            }

                            {
                                user ?
                                    <li>
                                        <Link to="#" exact onClick={() => dispatch(logout())}>
                                            LOGOUT
                                        </Link>
                                    </li>
                                    : ""
                            }
                            {
                            user ?
                            <li  
                            style={{display:"flex",alignItems:"center",justifyContent:"center",gap:".5rem"}}
                            onClick={() => console.log("hi")}>
                                <Link to="/cart">
                                    MY CART
                                    <Badge badgeContent={quantity} color="primary" style={{ marginTop: "-4px"}}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Link>
                            </li>
                            : ""
                            }



                        </ul>
                    </div>
                </div>
            </div>

            <Link to="#" className="menu-bars" id="menubt">
                <MenuIcon onClick={showsidebar} />
            </Link>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

                <ul className="nav-menu-items" onClick={showsidebar}>


                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <CancelIcon />
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to="/" >
                            HOME
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to="/product">
                            PRODUCTS
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to="/register" >
                            REGISTER
                        </Link>
                    </li>
                    {
                        !user ?
                            <li className="nav-text">
                                <Link to="/login" >
                                    SIGN-IN
                                </Link>
                            </li>
                            : ""
                    }
                    {
                        user ?
                            <li className="nav-text" onClick={() => dispatch(logout())}>
                                <Link to="contact">
                                    LOGOUT
                                </Link>
                            </li>
                            : ""
                    }

                    {
                        user ?
                            <li className="nav-text" onClick={() => console.log("hi")}>
                                <Link to="./cart">
                                    MY CART
                                    <Badge badgeContent={quantity} color="primary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Link>
                            </li>
                            : ""
                    }


                </ul>
            </nav>
        </NavBarStyled>
    );
}


const NavBarStyled = styled.div`
font-size:1rem;

.brand{
    margin-bottom:24px;
    cursor:pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    padding: inherit;

    img{
        height:30px;
        width:30px;
    }
}

.artdiv{
    
}

.nc{
}

.menu-bars{
    float: right;
    // position: sticky;
    position: fixed;
    // position: absolute;
    margin-right: 12px;
    display:none;

    svg{
        font-size:2.5rem;
    }

}
  
.nr{
    display:flex;

}
.U-navbar{
    background:rgba(191, 191, 191, .8);
    height:3rem;
    padding-top: 12px;
    display: flex;

    ul{
        padding-top: 10px;

      list-style: none;
      display: flex;
      align-items: center;
      margin-left:auto;
      flex-direction: row;
      gap: 1rem;
      font-size:1.2rem;
    }
    li{
        text-decoration: none;
    }
    a{
      text-decoration: none;
      font-size: 1.2rem;
      color:black;
      &:hover{
        background:grey;
        padding:5px;
        border-radius:2px;
        color:white;
        }
        
      
    }
    

    
}

@media only screen and (max-width: 800px) {
    .nc{
        display:none;
    }
    .menu-bars{
        display:block;
        //position: relative;
        
        z-index: 5;

    }
  }


.navbar{
    background-color: black;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
  .nav-menu{

    z-index:1;
    height: 100%;
    background-color: rgb(255,127,80,0.9);
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top:0;
    right: -100%;
    transition: 850ms;
  }
  
  .nav-menu.active{
    right:0;
    transition: 350ms;
    width: 250px;
    height: 100%;
  }
  
  .nav-text{
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }
  
  .nav-text a{
    text-decoration: none;
    color: #f5f5f5;
    font-size: 1rem;
    width: 95%;
    height:100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-radius: 5px;
  }
  
  .nav-text a:hover{
      background-color: rgba(6,11,38,0.9);
      color: white;
  
  }
  
  .nav-menu-items{
    width: 100%;
    li{
        list-style-type: none;
    }
  }
  
  .navbar-toggle{
    
    width: 100%;
    height:80px;
    display: flex;
    justify-content: start;
    align-items: center;


  }
  

  


    
`;

export default NavBar;