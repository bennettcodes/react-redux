import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

const TitleImage = React.createClass({
    componentDidMount: function() {
        const thisImage = ReactDOM.findDOMNode(this);
        const imageSrc = this.props.src;
        thisImage.style.backgroundImage = imageSrc;
    },
   render: function() {
       return (
           <div className="title-image"></div>
       );
   } 
});

export default TitleImage;