import React from 'react';
import ProductCard from "./ProductCard/ProductCard.jsx";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>CineFlix || home</title>
            </Helmet>
            <ProductCard />
        </>
    );
};

export default Home;