import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

var $ = require('jquery');
const footerProp = $('.footer');

const Layout = React.createClass({
      getDefaultProps: function() {
        return {
          footer: footerProp
        }
      },
   render: function() {
       return (
           <div>
               <Nav/>
               <div className="pages">
                {this.props.children}
               </div>
               <Footer ref="footer" />
           </div>
       );
   } 
});

export default Layout;