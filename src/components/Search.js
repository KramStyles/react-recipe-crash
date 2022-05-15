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
            background: linear-gradient(35deg, silver, lightgrey);
            outline: none;
            border-radius: 1rem;
            width: 100%;
            padding: 2rem;
            color: black;
            font-size: 1.2em;
            
        }
        
        svg{
            position: absolute;
            top: 30%;
            right: 20px;
            color: black;
            font-size: 2em;
        }
    `

    return(
        <Formstyle>
            <CgSearch/>
            <input type={'text'}/>
        </Formstyle>
    )
}