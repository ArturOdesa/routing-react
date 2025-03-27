import React from "react";
import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
            <div className='container'>
                <Header />
                <Sidebar />
                <Outlet />
            </div>
        )
}

export default Root