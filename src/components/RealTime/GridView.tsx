import React from 'react';
import './custom.css'; // Ensure your custom CSS is imported

const GridView = () => {
    return (
        <div className="grid-container">
            <a href="/realtime/components/baseInput" target="_self" rel="noopener noreferrer">
                <div className="grid-item">Components</div>
            </a>
            <a href="/realtime/modules/auth/login" target="_self" rel="noopener noreferrer">
                <div className="grid-item">Modules</div>
            </a>
            {/* <a href="/quivio/modules/intro" target="_self" rel="noopener noreferrer">
                <div className="grid-item">Modules</div>
            </a> */}
        </div>
    );
};

export default GridView;
