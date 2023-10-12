import React from 'react';
import "./Chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
    return (
       <div className='chart'>
         <LineChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Medals" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
       </div>
    );
};

export default Chart;
