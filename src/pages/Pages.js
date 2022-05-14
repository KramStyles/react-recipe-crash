import Home from "./Home";
import {Route, Routes} from "react-router-dom";

export default function Pages (){
    return(
        <Routes>
            <Route path={'/'} element={<Home />}/>
            {/*<Route path={'/cuisine/Italian'} element={<Home />}/>*/}
            {/*<Route path={'/cuisine/Favorites'} element={<Home />}/>*/}
            {/*<Route path={'/cuisine/Chinese'} element={<Home />}/>*/}
            {/*<Route path={'/cuisine/Intercontinental'} element={<Home />}/>*/}
        </Routes>
    )
}