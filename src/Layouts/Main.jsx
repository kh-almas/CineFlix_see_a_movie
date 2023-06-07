import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Common/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import {Container} from "react-bootstrap";

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Main;