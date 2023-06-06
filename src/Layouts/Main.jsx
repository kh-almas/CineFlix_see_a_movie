import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Common/Header/Header.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Main;