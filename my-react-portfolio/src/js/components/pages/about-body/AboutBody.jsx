import React from 'react';

var $ = require('jquery');

const AboutBody = React.createClass({
   componentDidMount: function() {
    const paragraphs = $('p');
    TweenMax.staggerFrom(paragraphs, 1, {
        y: 50,
        opacity: 0,
        ease: Expo.easeOut,
        delay: 0.1
    }, 0.05);  
   },
   render: function() {
       return (
           <div className="page-body-container">
            
           <p className="page-body"><br/><br/><span className="page-body-header">A bit about me</span><br/><br/>First off, thanks for taking the time to visit my site - It really does mean a lot to me.</p><br/>
               
           <p className="page-body">I've been designing the web for a little over five years now. Having always possessed a deep love and appreciation for gorgeous web experiences, I've carefully honed my abilities in an ongoing effort to become the most seasoned and capable front-end developer that I possibly can.</p>
               
           <p className="page-body"><br/>Creativity has come naturally to me for as long as I can remember, as has my obsession with computers and technology. By around the age of 20, it occurred to me that these two qualities were begging to be utilized in some harmonious fashion. Such an epiphany propelled me into the vast and evergrowing field of web development and design, with a particular focus on UI and UX (User Interface &amp; User Experience). In years past, I have spent time dabbling in various sectors of web creation, building a mastery over the Adobe suite, HTML5, CSS3, and always courting some of the more heavy-handed coding languages that never seemed to click.</p>
               
           <p className="page-body"><span className="page-body-header"><br/>Then, JavaScript clicked.</span><br/><br/>It was at this very moment that my already burning passion for the web sprouted into a feverish obsession. Seeing the endless array of dynamic animations and interactions that had resided in my head for so many years finally translate into tangible pixels for the first time was frankly, an indescribable rush. All I knew by this point was that something beautiful had begun. Since then I have not gone a single day without coding anywhere from 6 hours to 16 hours. I build sites for the fun of it and create unique and novel JavaScript widgets. I have an insatiable hunger for creating gorgeous art in the form of websites, and weaving experiences that users are very much unprepared for; experiences that will leave them with a profound and lasting impression.</p>
               
           <p className="page-body"><br/>This is what drives me. Knowing that there are so many websites floating around in digital space that are literally hemorrhaging potential by neglecting a much-needed respect and commitment to solid web design; sites that provide an otherwise exemplary service or product, but still struggle when it comes to retaining customer interest.</p>
               
           <p className="page-body"><br/>My philosophy is that by giving the user an experience that is clean, intuitive and just plain fun, you'll be remembered. Moreover, you'll be remembered POSITIVELY.</p>
               
           <p className="page-body"><br/>Let's rebuild the web.</p>
               
           </div>
       );
   } 
});

export default AboutBody;