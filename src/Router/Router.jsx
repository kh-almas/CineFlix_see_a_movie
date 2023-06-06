import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main.jsx";
import Home from "../Pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <p>this is error</p>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;