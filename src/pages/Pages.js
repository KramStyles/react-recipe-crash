import Cuisine from "./Cuisine";
import Home from "./Home";
import Category from "../components/Category";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function Pages() {
    return (
        <BrowserRouter>
            <Category/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cuisine/:type'} element={<Cuisine/>}/>
            </Routes>
        </BrowserRouter>
    )
}