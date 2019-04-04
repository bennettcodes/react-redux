import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

const NavItem = React.createClass({
    itemOver: function() {
        TweenMax.to(ReactDOM.findDOMNode(this), 0.5, {
            y: -50,
            ease: Expo.easeOut
        }, 0);
    },
    itemOut: function() {
        TweenMax.to(ReactDOM.findDOMNode(this), 0.5, {
            y: 0,
            ease: Expo.easeOut
        }, 0);
    },
   render: function() {
       return (
            <h3 ref="navItem" className="nav-item-header">{this.props.title}</h3>
       );
   } 
});

export default NavItem;