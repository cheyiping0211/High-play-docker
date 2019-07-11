import React from 'react';
import {
    BrowserRouter as Routers,
    Route,
}from 'react-router-dom';
import Home from "../page/home";
import Drivers from "../drivers";

const musicRouter = props => { 

        return (
            <Drivers>
                <Routers>
                    <Route exact path="/" component={Home} />
                </Routers>
            </Drivers>
        )    
}

export default musicRouter;