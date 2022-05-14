import {FaPizzaSlice} from "react-icons/fa";
import {GiChopsticks, GiRank3} from "react-icons/gi";
import {IoFastFood} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import styled from "styled-components";


const List = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0rem;
    background-color: silver;
    
    div{
        text-align: center;
    }
    
`

export default function Category(){
    return (
        <List>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/African'}>
                <GiRank3/>
                <h4>African</h4>
            </NavLink>
            <NavLink to={'/cuisine/Chinese'}>
                <GiChopsticks/>
                <h4>Chinese</h4>
            </NavLink>
            <NavLink to={'/cuisine/Mexican'}>
                <IoFastFood/>
                <h4>Mexican</h4>
            </NavLink>
        </List>
    )
}