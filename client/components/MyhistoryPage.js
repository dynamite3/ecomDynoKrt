import react, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import NavBar from "./Navbar";
import { apiendpoint } from "../App";
import { useSelector } from "react-redux";

function MyhistoryPage() {

    const [myhistory, setMyhistory] = useState("")
    const user = useSelector((state) => state.user.currentUser?.user);
    //console.log(user)

    function gethistory(user) {
        fetch(apiendpoint + "/order/usershistory",
            {
                method: "POST",
                headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
                body: JSON.stringify(
                    {
                        id: user._id,
                    }),
            })
            .then((data) => data.json())
            .then((d) => setMyhistory(d))
    }

    console.log(myhistory)

    useEffect(() => {
        if (user) {
            gethistory(user)
        }
    }, [user])

    if (myhistory) {
        return (
            <MyhistoryPageStyled>
                <NavBar />
                <Row className="maindiv">
                    {
                        myhistory.map((e) => (
                            <Row className="maincard">
                                <Col className="transcation_card" xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                                    <div>transcation Id :<b> {e.transcationinfo.id}</b></div>
                                    <div>itme quantity : <b> {e.transcationOf.quantity}</b></div>
                                    <div>total amount paid : <b> {e.transcationOf.total}</b></div>
                                </Col>

                                <Col className="transaction_products" xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>{
                                    e.transcationOf.products.map((k) =>
                                    (
                                        <Row className="r1">
                                            <Col className="c1" xs={6} sm={6} md={6} lg={6} ><Image src={k.img} fluid /></Col>
                                            <Col className="c2" xs={6} sm={6} md={6} lg={6}>
                                                <h3>{k.title}</h3>
                                                <div>{k.description}</div>
                                                <div>price: <b>{k.price}</b> </div>
                                                <div>color: <b>{k.color}</b></div>
                                                <div>quantity: <b>{k.quantity}</b></div>
                                                <div> size: <b>{k.size}</b></div>
                                            </Col>
                                        </Row>
                                    )
                                    )
                                }</Col>
                            </Row>
                        ))
                    }
                </Row>
            </MyhistoryPageStyled>
        )
    }
    else
        return (<div>loading...</div>)

}


const MyhistoryPageStyled = styled.div`

.maincard{
    diaply:flex;
    margin-top:2rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    
}


.transcation_card{

    display:flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    .c1{
    display: flex;
    justify-content: center;
    align-items: center;
    }
}


.transaction_products{
    
    .r1{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    }
    .c1{
    margin-top:.5rem;
    margin-bottom:.5rem;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    }
    .c2{
        margin-top:.5rem;
        margin-bottom:.5rem;
    }
}
`;

export default MyhistoryPage
