import React from 'react';
import { useQuery } from '@tanstack/react-query'

const UseGetAllMovie = () => {

    const { isLoading, refetch, isError, data : movie = [], error } = useQuery({
        queryKey: ['movie'],
        queryFn: async () => {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
            return response.json();
        },
    })

    return [movie];
};

export default UseGetAllMovie;