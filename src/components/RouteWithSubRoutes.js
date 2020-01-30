import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Match, Prompt} from 'react-router-dom';

//Används ej
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={(props) => (
        <route.component {...props} routes={route.routes} />
    )} />
)