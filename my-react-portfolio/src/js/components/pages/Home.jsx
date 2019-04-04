import React from 'react';
import HomeBody from './home-body/HomeBody';

var $ = require('jquery');

const Home = React.createClass({
    componentDidMount: function() {
        var pageHeader = this.refs.pageHeader;
        TweenMax.from(pageHeader, 1, {
            y: 50,
            opacity: 0,
            ease: Expo.easeOut
        }, 0);
    },
    render: function() {
       return (
           <div>
               <h1 ref="pageHeader" className="page-header">Home</h1>
               <HomeBody/>
           </div>
       );
    } 
});

export default Home;