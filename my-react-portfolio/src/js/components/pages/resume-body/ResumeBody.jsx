import React from 'react';

var $ = require('jquery');

const ResumeBody = React.createClass({
   componentDidMount: function() {
    const paragraphs = $('p');
    TweenMax.staggerFrom(paragraphs, 1, {
        y: 50,
        opacity: 0,
        ease: Expo.easeOut,
        delay: 0.1
    }, 0.05);  
   },
    checkMount: function() {
      console.log(this.refs.pageBody.isMounted);  
    },
   render: function() {
       return (
           <div className="page-body-container">
            
           <p className="page-body"><br/><br/><span className="page-body-header">Employment</span><br/><br/><span className="page-body-subheader1">Senior Web Developer</span><br/><span className="page-body-subheader2">in Focus Advertising: Advertising Agency</span><br/><span className="page-body-subheader3">October 2013 - March 2016</span></p>
           <p className="page-body">Take full command of all web-based projects relating to both the front-end and back-end as requested by a diverse catalogue of clients representing a colorful spectrum of industries. Routinely deploy everything from landing pages to full-blown E-commerce solutions complete with responsive design and performance parity across all major browsers and OS’s.</p><br/><br/>
               
            
           <p className="page-body"><span className="page-body-subheader1"><br/>Post Production Artist</span><br/><span className="page-body-subheader2">Graphic Orb: Post-Production Company</span><br/><span className="page-body-subheader3">April 2013 - July 2013</span></p>
           <p className="page-body">Handle a wide range of assets for film, including resizing thumbnails for Netflix, preparing key art and one-sheets for print, and coding HTML emails with tables.</p><br/><br/>
               
            
           <p className="page-body"><span className="page-body-subheader1"><br/>Lead Artist/IT Specialist</span><br/><span className="page-body-subheader2">Winnol.com: Internet Start-Up</span><br/><span className="page-body-subheader3">October 2011 - March 2013</span></p>
           <p className="page-body">In charge of site’s user interface and experience. Design materials for mediums spanning both web and print. Help with PC and Mac-related issues.</p>
               
               <div className="skills-container">
                   <div className="skills-header">
                   <p className="page-body"><br/><br/><span className="page-body-header">Skill Set</span></p>
               </div>
                   <div className="skill-thirds">
            <p className="page-body skill-third front-end-third">
           <span className="page-body-subheader2">Front-end</span><br/>
               <span>&bull;&nbsp;&nbsp;React</span><br/>
               <span>&bull;&nbsp;&nbsp;Angular</span><br/>
               <span>&bull;&nbsp;&nbsp;jQuery/AJAX</span><br/>
               <span>&bull;&nbsp;&nbsp;HTML5/CSS3</span><br/>
               <span>&bull;&nbsp;&nbsp;JavsScript</span><br/>
               <span>&bull;&nbsp;&nbsp;Greensock JS</span><br/>
               </p>
               <p className="page-body skill-third back-end-third">
           <span className="page-body-subheader2">Back-end</span><br/>
               <span>&bull;&nbsp;&nbsp;Node JS</span><br/>
               <span>&bull;&nbsp;&nbsp;Express</span><br/>
               <span>&bull;&nbsp;&nbsp;NPM</span><br/>
               <span>&bull;&nbsp;&nbsp;Webpack</span><br/>
               <span>&bull;&nbsp;&nbsp;PHP</span><br/>
               <span>&bull;&nbsp;&nbsp;MySQL</span>
               </p>
               <p className="page-body skill-third design-third">
           <span className="page-body-subheader2">Design</span><br/>
               <span>&bull;&nbsp;&nbsp;Photoshop</span><br/>
               <span>&bull;&nbsp;&nbsp;Illustrator</span><br/>
               <span>&bull;&nbsp;&nbsp;InDesign</span><br/>
               <span>&bull;&nbsp;&nbsp;After Effects</span><br/>
               <span>&bull;&nbsp;&nbsp;Premiere Pro</span><br/>
               <span>&bull;&nbsp;&nbsp;Flash</span>
               </p>
               </div>
               </div>
               
           </div>
       );
   } 
});

export default ResumeBody;