import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {giveName} from '../actions/index';

import NavItem from './NavItem';

var $ = require('jquery');

const Nav = React.createClass({
    componentDidMount: function() {
        var nav = this.refs.nav;
        $(window).resize(function initial() {
            var headerPaddingLeft = $('.header').css('paddingLeft').replace(/[^-\d\.]/g, '');
            var totalLeft = (0 - headerPaddingLeft) + ($(window).width() - $('.nav').width());
            TweenMax.set(nav, {
                left: totalLeft
            });
            return initial;
        }());
    },
    render: function() {
        return (
            <div className="nav" ref="nav">
                <NavItem navTitle="About" />
                <NavItem navTitle="Resume" />
                <NavItem navTitle="Portfolio" />
            </div>
        );
    }
});

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        activePage: state.activePage
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
export default connect(mapStateToProps, matchDispatchToProps)(Nav);
