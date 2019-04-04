import React from 'react';
import PortfolioBody from './portfolio-body/PortfolioBody';
import TitleImage from './TitleImage';

const Portfolio = React.createClass({
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
               <h1 ref="pageHeader" className="page-header">Portfolio</h1>
               <br/><br/>
               <PortfolioBody footer={this.props.footer} />
           </div>
       );
   } 
});

export default Portfolio;