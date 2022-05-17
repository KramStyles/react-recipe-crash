import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "../components/Category";
import Cuisine from "./Cuisine";
import Fetched from "./Fetched";
import Home from "./Home";
import Recipe from "./Recipe";
import Search from "../components/Search";

export default function Pages() {
    return (
        <BrowserRouter>
            <Category/>
            <Search/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cuisine/:type'} element={<Cuisine/>}/>
                <Route path={'/searched/:search'} element={<Fetched/>}/>
                <Route path={'/recipe'} element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    )
}