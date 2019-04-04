import React from 'react';
import AboutBody from './about-body/AboutBody';
import TitleImage from './TitleImage';

const About = React.createClass({
    getInitialState: function() {
        return {
            titleImageSrc: "url(images/about-hero-vertical.jpg)"
        }
    },
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
               <TitleImage src={this.state.titleImageSrc}></TitleImage>
               <h1 ref="pageHeader" className="page-header">Bennett</h1>
               <AboutBody/>
           </div>
       );
   } 
});

export default About;