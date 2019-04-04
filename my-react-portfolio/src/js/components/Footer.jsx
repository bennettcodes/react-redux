import React from 'react';

import Copyright from './copyright/Copyright';

const Footer = React.createClass({
   render: function() {
       return (
           <div className="footer">
               <Copyright name="Bennett Waisbren" year={new Date().getFullYear()}/>
           </div>
       );
   } 
});

export default Footer;