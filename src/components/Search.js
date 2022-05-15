import {CgSearch} from "react-icons/cg";
import styled from "styled-components";
import {useState} from "react";

export default function Search (){

    const Formstyle = styled.form`
        margin: auto;
        position: relative;
        width: 90%;
        
        input{
            border: none;
            background: linear-gradient(35deg, #494949, #313131);
            outline: none;
            border-radius: 1rem;
            padding: 2rem;
        }
        
        svg{
            position: absolute;
            top: 50%;
            left: 0%;
            color: white;
        }
    `

    return(
        <Formstyle>
            <input type={'text'}/>
        </Formstyle>
    )
}