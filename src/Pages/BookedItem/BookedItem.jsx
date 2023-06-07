import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import useGetAllMovie from "../../Hooks/useGetAllMovie.jsx";
import {Helmet} from "react-helmet";

const BookedItem = () => {
    const [fevMovie, setFevMovie] = useState([]);


    useEffect(() => {
        const getStorageItem = JSON.parse(localStorage.getItem('booked_movie'));
        setFevMovie(getStorageItem);
    }, [])

    console.log(fevMovie);
    return (
        <div>
            <Helmet>
                <title>CineFlix || my movie</title>
            </Helmet>
            <div className="mt-4 border" style={{maxWidth: "800px", margin: "auto"}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie Name</th>
                        <th>Person Name</th>
                        <th>Total Sit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        fevMovie?.map((data, index) =>
                            <tr key={index}>
                                <td>{index +1}</td>
                                <td>{data?.movieName}</td>
                                <td>{data?.personName}</td>
                                <td>{data?.totalSit}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default BookedItem;