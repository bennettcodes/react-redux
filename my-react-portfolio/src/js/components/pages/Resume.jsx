import React from 'react';
import ResumeBody from './resume-body/ResumeBody';
import TitleImage from './TitleImage';

const Resume = React.createClass({
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
               <h1 ref="pageHeader" className="page-header">Resume</h1>
               <ResumeBody/>
           </div>
       );
   } 
});

export default Resume;