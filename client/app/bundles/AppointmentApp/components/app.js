import React from 'react';
import ControlPanel from '../containers/controlPanel'

const app = () => {
    return (
        <div id="main-container" className="container">
            <div className="row">
                <div className="center-block"> 
                    <ControlPanel/>
                </div>
            </div>
        </div>
    );
};

export default app;