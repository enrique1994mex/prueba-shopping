import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import PurchaseSummary from "../views/PurchaseSummary";

const RoutesComponents = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/purchase" element={<PurchaseSummary/>}/>
        </Routes>
    </BrowserRouter>
);

export default RoutesComponents; 