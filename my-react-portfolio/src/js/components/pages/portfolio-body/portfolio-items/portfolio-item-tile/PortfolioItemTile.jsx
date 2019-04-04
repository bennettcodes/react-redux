import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

const PortfolioItemTile = React.createClass({
    componentDidMount: function() {
        const portfolioItemTile = ReactDOM.findDOMNode(this);
        const portfolioItemTileClass = `.${portfolioItemTile.className}`;
        this.props.getChild(portfolioItemTile);
        const pageBody = $('.page-body');

        TweenMax.set(pageBody, {
           perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: '2d'
        });
        
        TweenMax.set(portfolioItemTile, {
           transformOrigin: 'center',
            zIndex: 0
        });
    },
   render: function() {
       return (
           <img ref="portfolioItemTile" className="portfolio-item-tile" src="" />
       );
   } 
});

export default PortfolioItemTile;