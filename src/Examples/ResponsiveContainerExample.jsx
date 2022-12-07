import React from 'react';
import ResponsiveContainer from '../Components/ResponsiveContainer';

function ResponsiveContainerExample(props) {
    return (
        <div>
            <ResponsiveContainer>
                <p className="p-3 text-danger bg-warning">Hello World</p>
                <p className="p-3 text-warning bg-danger"></p>
            </ResponsiveContainer>
        </div>
    );
}

export default ResponsiveContainerExample;