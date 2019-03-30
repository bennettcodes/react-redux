import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {giveName} from '../actions/index';

import Name from './Name';
import Nav from './Nav';

var $ = require('jquery');

const Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <div className="header-inner">
                    <Name />
                    <Nav />
                </div>
            </div>
        );
    }
});

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Header);
