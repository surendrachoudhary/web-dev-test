import React from 'react';
import "./Tab.css"

const Tabs = ({ toggleChart, toggleTable }) => {
    return (
        <div className='switch_button'>
            <button onClick={toggleTable}>Table</button>
            <button onClick={toggleChart}>Line Chart</button>
            
        </div>
    );
};

export default Tabs;
