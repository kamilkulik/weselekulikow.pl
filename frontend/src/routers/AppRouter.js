import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <Route path="/home" component={HomePage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;