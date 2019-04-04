import React from 'react';
import ReactDOM from 'react-dom';

import PortfolioItemTile from './portfolio-item-tile/PortfolioItemTile';

var $ = require('jquery');

const PortfolioItems = React.createClass({
    getInitialState: function() {
        return {
            isActive: this.props.active,
            childItemTiles: []
        }
    },
   componentDidMount: function() {
    const portfolioItemTile = $('.portfolio-item-tile');
    const pageBody = $('.page-body');
      const portfolioItemsClose = $('.portfolio-items-close');
      TweenMax.set(portfolioItemsClose, {
         userSelect: 'none' 
      });
       
    TweenMax.set(pageBody, {
       perspective: 800,
        perspectiveOrigin: 'center',
        transformStyle: '2d'
    });
   },
    getChild: function(e) {
        this.setState({childItemTiles:this.state.childItemTiles.push(e)});
        this.props.getCatTiles(this.state.childItemTiles);
    },
   render: function() {
       return (
           <div className="portfolio-items">
            <div onClick={this.props.hideCat} className="portfolio-items-close">x</div>
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
            <PortfolioItemTile getChild={this.getChild} src="" />
           </div>
       );
   } 
});

export default PortfolioItems;