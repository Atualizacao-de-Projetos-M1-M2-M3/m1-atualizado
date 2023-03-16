import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { ProductsProvider } from "./Providers/ProductsContext";

export const Router = () =>(
    <Routes>
        {/* <Route path="/login"/>
        <Route path="/"/> */}
        <Route path="/" element={<ProductsProvider><HomePage/></ProductsProvider>}/>
    </Routes>
)