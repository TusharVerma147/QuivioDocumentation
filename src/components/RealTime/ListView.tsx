import React from 'react';
import './custom.css'; 

const ListView = () => {
    return (
        <div className="list-container">
            <a href="/realtime/components/baseInput" target="_self" rel="noopener noreferrer">
                <div className="list-item">Components</div>
            </a>
            <a href="/realtime/modules/auth/login" target="_self" rel="noopener noreferrer">
                <div className="list-item">Modules</div>
            </a>
            {/* <a href="/quivio/modules/intro" target="_self" rel="noopener noreferrer">
                <div className="grid-item">Modules</div>
            </a> */}
        </div>
    );
};

export default ListView;
