import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');
import {TweenMax, TimelineMax} from 'gsap';
import $ from 'jquery';

const App = React.createClass({
    componentDidMount: function() {
        TweenMax.set(this.refs.app, {
            userSelect: 'none'
        });
    },
    render: function() {
        return (
            <div className="app" ref="app">
                <UserList />
                <UserDetails />
            </div>
        );
    }
});

export default App;