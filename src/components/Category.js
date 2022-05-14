import {FaPizzaSlice} from "react-icons/fa";
import {GiChopsticks, GiRank3} from "react-icons/gi";
import {IoFastFood} from "react-icons/io5";
// import styled from "styled-components";

export default function Category(){
    return (
        <div>
            <div>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
            <div>
                <GiRank3/>
                <h4>Favorites</h4>
            </div>
            <div>
                <GiChopsticks/>
                <h4>Chinese</h4>
            </div>
            <div>
                <IoFastFood/>
                <h4>Intercontinental</h4>
            </div>
        </div>
    )
}