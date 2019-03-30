import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {giveName} from '../actions/index';

var $ = require('jquery');

const Body = React.createClass({
    componentDidMount: function() {
        this.staggerIn();
    },
    staggerIn: function() {
        TweenMax.killAll();
        TweenMax.set($('.stagger-item'), {
            opacity: 0,
            y: 50
        });
        TweenMax.staggerTo($('.stagger-item'), 1, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
        }, 0.05);
    },
    componentDidUpdate: function() {
        this.staggerIn();
    },
    renderBio: function() {
        switch(true) {
            case this.props.activePage === 'About':
                return this.props.about.bio();
                break;
            case this.props.activePage === 'Resume':
                return this.props.resume.skillsetBody();
                break;
            case this.props.activePage === 'Portfolio':
                return this.props.portfolio.categoriesBody();
                break;
        }
    },
    render: function() {
        return (
            <div className="body">{this.renderBio()}</div>
        );
    }
});

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        about: state.about,
        resume: state.resume,
        portfolio: state.portfolio,
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
export default connect(mapStateToProps, matchDispatchToProps)(Body);
