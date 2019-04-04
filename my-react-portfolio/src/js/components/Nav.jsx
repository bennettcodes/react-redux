import React from 'react';

import {Link} from 'react-router';
import NavItems from './nav-items/NavItems';

const Nav = React.createClass({
   render: function() {
       return (
           <div className="nav">
               <NavItems/>
           </div>
       );
   } 
});

export default Nav;