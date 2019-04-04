import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

import {Link} from 'react-router';
import NavItem from './nav-item/NavItem';

const NavItems = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'Bennett Waisbren'
        }
    },
    itemOver: function() {
        console.log(ReactDOM.findDOMNode(this.props.children));
    },
    itemOut: function() {
        console.log(ReactDOM.findDOMNode(this.props.children));
    },
    handleMouseOver(e) {
        TweenMax.to(e.target, 0.5, {
            y: -10,
            ease: Expo.easeOut
        }, 0);
        TweenMax.to(e.target, 0.5, {
            backgroundColor: 'rgba(0,0,0,0.05)',
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($('.nav-item').not(e.target), 0.5, {
            y: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            ease: Expo.easeOut
        }, 0);
    },
    handleMouseOut(e) {
        TweenMax.to(e.target, 0.5, {
            y: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($('.nav-item'), 0.5, {
            y: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            ease: Expo.easeOut
        }, 0);
    },
   render: function() {
       return (
           <div className="nav-items">
               <Link onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className="nav-item" to=""><NavItem title="Bennett"/></Link>
               <Link onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className="nav-item" to="resume"><NavItem title="Resume"/></Link>
               <Link onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className="nav-item" to="portfolio"><NavItem title="Portfolio"/></Link>
               <Link onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className="nav-item" to="contact"><NavItem title="Contact"/></Link>
           </div>
       );
   } 
});

export default NavItems;