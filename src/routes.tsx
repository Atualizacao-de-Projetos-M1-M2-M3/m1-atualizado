import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

export const Router = () =>(
    <Routes>
        {/* <Route path="/login"/>
        <Route path="/"/> */}
        <Route path="/" element={<HomePage/>}/>
    </Routes>
)