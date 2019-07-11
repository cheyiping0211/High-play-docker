import React from 'react';
import {
    BrowserRouter as Routers,
}from 'react-router-dom';
import MusicSystem from "../page/musicSystem";
import Drivers from "../drivers";

const musicSystemRouter = props => { 

        return (
            <Drivers>
                <Routers>
                    <MusicSystem/>
                </Routers>
            </Drivers>
        )    
}

export default musicSystemRouter;