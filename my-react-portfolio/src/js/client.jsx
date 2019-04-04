import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

var $ = require('jquery');

const app = document.getElementById('app');
const body = $('body');
const paragraph = $('p');
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const Main = React.createClass({
    componentDidMount: function() {
        TweenMax.set($('a'), {
           textDecoration: 'none' 
        });
    },
    locationHasChanged: function() {
    },
    render: function() {
       return (
            <Router history={appHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute ref="about" component={About}></IndexRoute>
                    <Route ref="resume" path="resume" component={Resume}></Route>
                    <Route ref="portfolio" path="portfolio" component={Portfolio}></Route>
                    <Route ref="contact" path="contact" component={Contact}></Route>
                </Route>
            </Router>
       );
    } 
});

ReactDOM.render(<Main/>, app);