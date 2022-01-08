import react, { useEffect, useState } from "react";
import { Col,Row } from "react-bootstrap";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    emailId: yup.string().required().email("Proper Email id is required!")
})


function NewsLettter() {

    const formik = useFormik({
        initialValues: {
            emailId: "",
        },
        onSubmit: (values) => {
            console.log(values)
            setval(values.emailId)
           
            formik.resetForm()
        },
        validationSchema: validationSchema
    })
    const [val,setval]=useState("")
    
    return (
        <NewsLettterStyled>
            <Row className="nlr">
                <div><h1>Newsletter</h1></div>
                <div className="Desc">Get timely updates from your favorite products</div>
                <form className="InputContainer"
                onSubmit={formik.handleSubmit}
                >
                    <input  
                    name="emailId"
                    onChange={(e)=>setval(e.target.value)}
                    placeholder="enter your mail" type="email"
                    value={formik.values.emailId}
                    onChange={formik.handleChange}
                    error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                    helperText={formik.touched.emailId && formik.errors.emailId}
                    ></input>
                    <button type="submit"><SendIcon/></button>
                </form>
            </Row>
            
        </NewsLettterStyled>
    )
}

const NewsLettterStyled = styled.div`
text-align:center;
.nlr{
    height: 40vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Desc{
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 20px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 70px;
    }
}
.InputContainer{
    width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  input{
    border: none;
    flex: 8;
    padding-left: 20px;
    width:inherit;
  }
  button{
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    display: flex;
        align-items: center;
        justify-content: center;
  }
}

`;

export default NewsLettter
