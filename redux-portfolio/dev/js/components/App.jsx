import React from 'react';
require('../../scss/style.scss');
import {TweenMax, TimelineMax} from 'gsap';

import $ from 'jquery';

import Header from '../containers/Header';
import Body from '../containers/Body';

const App = React.createClass({
    componentDidMount: function() {
        TweenMax.set(this.refs.app, {
            userSelect: 'none'
        });
    },
    render: function() {
        return (
            <div className="app" ref="app">
                <Header />
                <Body />
            </div>
        );
    }
});

export default App;