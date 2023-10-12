import React, { useState } from 'react';
import './App.css';
import data from '../src/components/dummyData.json';
import Table from './components/Table';
import Chart from './components/Chart';
import Tabs from './components/Tabs';

function App() {
    const [showChart, setShowChart] = useState(false);

    const toggleChart = () => {
        setShowChart(true);
    };

    const toggleTable = () => {
        setShowChart(false);
    };

    return (
        <div className="App">
            <div className="personal-info">
                {
                    <div className='Top-Heading'>
                    <h1>Name : Surendra Pandar</h1>
                    <h1>Email : surendrachoudhary2976@gmail.com</h1>
                    <h1>Phone : 9982792916</h1>
                    </div>
                }
            </div>
            <Tabs toggleChart={toggleChart} toggleTable={toggleTable} />
            {showChart ? <Chart data={data} /> : <Table data={data} />}
        </div>
    );
}

export default App;
