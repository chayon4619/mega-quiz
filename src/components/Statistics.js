import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, BarChart, Legend, Bar, Tooltip, XAxis, YAxis, } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data
    return (
        <div >
            <h1 className='text-center font-bold text-3xl text-gray-700 py-8'>The Quiz Statistics</h1>
            <BarChart className='mx-auto' width={730} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div >
    );
};

export default Statistics;