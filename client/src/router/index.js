import React from 'react';
import {
    BrowserRouter as Routers,
    Route, Switch
} from 'react-router-dom';
import Traffic from "../page/Traffic";
import Overview from "../page/Overview";

const RouterConfig = () => {

    return (
        <Routers>
            <Switch>
                <Route path="/overview" component={Overview} />
                <Route path="/" component={Traffic} />
            </Switch>
        </Routers>
    )
}

export default RouterConfig;



