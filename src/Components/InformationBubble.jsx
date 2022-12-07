import React from 'react';

function InformationBubble({ title, text, src, className }) {
    const customPositioning = {
        position: 'absolute',
        top: '20%',
        left: '10%',
        bottom: '20%',
        right: '10%',
    }

    return (
        <div className={'position-relative h-auto'} >
            <div className='d-flex flex-column justify-content-center align-items-center p-3' style={customPositioning}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <img
                src={src}
                alt="test"
                className="w-100" />
        </div>
    );
}

export default InformationBubble;