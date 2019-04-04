import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

const PortfolioTile = React.createClass({
    getInitialState: function() {
      return {
          tileClasses: `portfolio-tile ${this.props.cat}`,
          isClicked: false
      }  
    },
    componentDidMount: function() {
        const thisTile = ReactDOM.findDOMNode(this);
        const imageSrc = this.props.src;
        const portfolioTile = $('.portfolio-tile');
        
        TweenMax.set(portfolioTile, {
           transformOrigin: 'center',
            zIndex: 0,
            boxShadow: '0 0 5vw rgba(0,0,0,0)'
        });
        
        thisTile.style.backgroundImage = imageSrc;
    },
    tileOver: function() {
        if (!this.state.isClicked) {
            const thisTile = ReactDOM.findDOMNode(this);
            TweenMax.set(thisTile, {
               zIndex: 5 
            });
            TweenMax.set($('.portfolio-tile').not(thisTile), {
               zIndex: 0
            });
            TweenMax.to(thisTile, 0.5, {
                scale: 1.15,
                boxShadow: '0 0 5vw rgba(0,0,0,0.2)',
                ease: Expo.easeOut
            }, 0);
    //        console.log('Active category: ' + this.props.currentCat);
    //        console.log('Category is active: ' + this.props.catActive);
        }
    },
    tileOut: function() {
        if (!this.state.isClicked) {
            const thisTile = ReactDOM.findDOMNode(this);
            TweenMax.set(thisTile, {
               zIndex: 5 
            });
            TweenMax.to(thisTile, 0.5, {
                scale: 1,
                boxShadow: '0 0 5vw rgba(0,0,0,0)',
                ease: Expo.easeOut,
                onComplete: function() {
                    TweenMax.set(thisTile, {
                       zIndex: 0 
                    });
                }
            }, 0);
        }
    },
    logNewCat: function() {
        const newCat = this.props.currentCat;
      setTimeout(function() {
          console.log('Active category: ' + newCat);
      }, 300);
    },
    toggleClickedState: function() {
    this.setState({isClicked: !this.state.isClicked});
    console.log(this.state.isClicked);
    },
    tileClick: function() {
        const toggleClick = this.toggleClickedState;
        toggleClick();
        setTimeout(function() {
            toggleClick();
        }, 500);
      const thisTile = ReactDOM.findDOMNode(this);
      const thisTileClasses = thisTile.className;
      const portfolioTile = $('.portfolio-tile');
      TweenMax.set(portfolioTile, {
         pointerEvents: 'none'
      });
        TweenMax.to(thisTile, 0.5, {
            scale: 1,
            boxShadow: '0 0 5vw rgba(0,0,0,0)',
            ease: Expo.easeOut
        }, 0);
        TweenMax.to(portfolioTile, 0.5, {
            scale: 1,
            boxShadow: '0 0 5vw rgba(0,0,0,0)',
            ease: Expo.easeOut,
            onComplete: function() {
                TweenMax.set(portfolioTile, {
                   zIndex: 0,
                   pointerEvents: 'auto'
                });
            }
        }, 0);
      const thisTileClassesString = thisTileClasses.toString();
        switch(true) {
            case thisTileClassesString.endsWith('banners'):
                this.props.catChange('banners');
                this.props.itemTileChange('banners');
            break;
            case thisTileClassesString.endsWith('billboards'):
                this.props.catChange('billboards');  
                this.props.itemTileChange('billboards');  
            break;
            case thisTileClassesString.endsWith('cartoons'):
                this.props.catChange('cartoons');   
                this.props.itemTileChange('cartoons');   
            break;
            case thisTileClassesString.endsWith('life'):
                this.props.catChange('life');
                this.props.itemTileChange('life');
            break;
            case thisTileClassesString.endsWith('portraits'):
                this.props.catChange('portraits');    
                this.props.itemTileChange('portraits');    
            break;
            case thisTileClassesString.endsWith('eblasts'):
                this.props.catChange('eblasts');
                this.props.itemTileChange('eblasts');
            break;
            case thisTileClassesString.endsWith('flyers'):
                this.props.catChange('flyers');
                this.props.itemTileChange('flyers');
            break;
            case thisTileClassesString.endsWith('js'):
                this.props.catChange('js');
                this.props.itemTileChange('js');
            break;
            case thisTileClassesString.endsWith('sites'):
                this.props.catChange('sites');
                this.props.itemTileChange('sites');
            break;
        }
//      if (thisTile.cartoons) {
//          console.log('cartoons');
//      } else {
//          console.log('something else');
//      }
    },
   render: function() {
       return (
           <div onClick={this.tileClick} onMouseOver={this.tileOver} onMouseOut={this.tileOut} className={this.state.tileClasses}></div>
       );
   } 
});

export default PortfolioTile;