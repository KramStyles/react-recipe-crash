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
            <div>
            {/*<NavLink to={'/cuisine/Italian'}>*/}
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
            <div>
            {/*<NavLink to={'/cuisine/Favorites'}>*/}
                <GiRank3/>
                <h4>Favorites</h4>
            </div>
            <div>
            {/*<NavLink to={'/cuisine/Chinese'}>*/}
                <GiChopsticks/>
                <h4>Chinese</h4>
            </div>
            <div>
            {/*<NavLink to={'/cuisine/Intercontinental'}>*/}
                <IoFastFood/>
                <h4>Intercontinental</h4>
            </div>
        </List>
    )
}