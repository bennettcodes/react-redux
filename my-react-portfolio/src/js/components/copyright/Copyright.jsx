import React from 'react';

const Copyright = React.createClass({
   render: function() {
       return (
           <h5 className="copyright">Copyright &copy; {this.props.year} {this.props.name}. All Rights Reserved.</h5>
       );
   } 
});

export default Copyright;