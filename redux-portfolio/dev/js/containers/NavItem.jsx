
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changePage} from '../actions/index';

var $ = require('jquery');

const NavItem = React.createClass({
    changePage: function() {
        this.props.changePage(this.props.navTitle);
    },
    render: function() {
        return (
            <div onClick={this.changePage} className="nav-item">
                {this.props.navTitle}
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
        changePage: changePage
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(NavItem);
