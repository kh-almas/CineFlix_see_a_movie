import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import SingleProduct from "../Pages/SingleProduct/SingleProduct.jsx";
import BookedItem from "../Pages/BookedItem/BookedItem.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <p>this is error</p>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/single-movie',
                element: <SingleProduct />
            },
            {
                path: '/my-booking',
                element: <BookedItem />
            }
        ]
    },
]);

export default router;