import React from 'react';
import ContactBody from './contact-body/ContactBody';
import TitleImage from './TitleImage';

const Contact = React.createClass({
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
               <h1 ref="pageHeader" className="page-header">Contact</h1>
               <ContactBody/>
           </div>
       );
   } 
});

export default Contact;