import react, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import PopularProucts from "./PopularProucts";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';



function ProductPage() {

    const location = useLocation();
    
    const navigate = useNavigate()

    const [category, setCategory] = useState(location.pathname.split("/")[2])
    const [filters, setFilters] = useState({})
    const [sort,setSort] =useState("")

    function handleChange(e) {
        
        const val = e.target.value
        const title=e.target.name
        if(val)
        {
            setFilters({...filters,[title]:val})
        }
        else
        {
            const asArray = Object.entries(filters);
            const filtered = asArray.filter(([key, value]) => key !== title);
            setFilters(Object.fromEntries(filtered))
        }
    }

    function handleChange1(e) {
        setCategory(e.target.value)
        navigate('/product/' + e.target.value);

    }

    function handleChange2(e) {
       setSort(e.target.value)
    }
    
    useEffect(() => {
        
    }, [category])

    

    return (
        <ProductPageStyled>


            <Navbar />
            <Announcement />
            <Row>
                <Col className="filter1">

                    <select
                        onChange={(e) => handleChange1(e)}
                        value={category}
                    >
                        <option value="">category</option>
                        <option value="men" >men</option>
                        <option value="women" >women</option>
                        <option value="women" >accessories</option>
                    </select>
                </Col>
            </Row>

            <Row className="">

                <Col className="filter1">
                    <select
                         name="category"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">type</option>
                        <option value="shirt" >shirt</option>
                        <option value="tshirt">tshirt</option>
                        <option value="jeans">jeans</option>
                        <option value="accessories">accessories</option>

                    </select>
                </Col>
                <Col className="filter1">
                    <select
                        name="color"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">color</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                    </select>
                </Col>
                <Col className="filter1">
                    <select
                         name="size"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">size</option>
                        <option value="m">m</option>
                        <option value="l">l</option>
                        <option value="xl">xl</option>
                        <option value="xxl">xxl</option>
                    </select>
                </Col>

            </Row>
            <Row>
                <Col className="filter1">
                    <select
                        onChange={(e) => handleChange2(e)}
                    >
                        <option value="">sort</option>
                        <option value="asc">Price(asc)</option>
                        <option value="desc">Price(desc)</option>
                    </select>
                </Col>
            </Row>

            <PopularProucts category={category} filters={filters} sort={sort}/>

        </ProductPageStyled>
    )
}
const ProductPageStyled = styled.div`

.filter{
    margin-top:1rem;
    display:flex;

}

.filter1{
    display:flex;
    margin:.5rem;
}

`;

export default ProductPage
