import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');

import Grid from './Grid';

var $ = require('jquery');

const App = React.createClass({
    getInitialState: function() {
      return {
          counter: 0,
          currentlyGeneratedItem: 0,
          gridItemCount: 21,
          gridClassRaw: '',
          gridClass: '',
          gridRef: '',
          gridColumnClassRaw: '',
          gridColumnClass: '',
          gridColumnRef: '',
          gridItemClassRaw: '',
          gridItemRef: '',
          gridItemClass: '',
          gridItemArray: [],
          gridItemTextClassRaw: '',
          gridItemTextClass: '',
          gridItemTextRef: '',
          gridItemTextDelay: 0.1
      }  
    },
    componentDidUpdate: function() {
        this.cl(`new item count is ${this.state.currentlyGeneratedItem}.`);
        var grid = this.state.gridRef;
        var gridItemArray = this.state.gridItemArray;
        var gridColumn = this.state.gridColumnRef;
        var gridItem = this.state.gridItemRef;
        var gridItemText = this.state.gridItemTextRef;
        var gridClassRaw = this.state.gridClassRaw;
        var gridColumnClassRaw = this.state.gridColumnClassRaw;
        var gridItemClassRaw = this.state.gridItemClassRaw;
        var gridItemTextClassRaw = this.state.gridItemTextClassRaw;
        var gridItemTextDelay = this.state.gridItemTextDelay;
        var random = this.random;
        var col1ItemCounter = 0;
        var col2ItemCounter = 0;
        var col3ItemCounter = 0;
        var imageCounter = 1;
        var columnDelay = 0;
        var gridItemXStart = 200;
        var gridItemYStart = 400;
        var gridItemScaleStart = 1.3;
        var gridItemRotationXStart = 45;
        var gridItemRotationYStart = 15;
        var columnDelayIncrement = 0.1;
        TweenMax.set(this.refs.app, {
           userSelect: 'none' 
        });
        TweenMax.set(grid, {
            marginTop: (grid.offsetWidth * 0.015) * 3,
            marginBottom: (grid.offsetWidth * 0.015) * 3,
            marginLeft: 'auto',
            marginRight: 'auto'
        });
//        $(`.${gridItemClassRaw}`).each(function(i) {
////            TweenMax.set($(`.${gridItemClassRaw}`).eq(i), {
////               backgroundImage: `url(images/banners/${imageCounter++}.jpg)` 
////            });
//            if (i % 2 === 0) {
//                $(`.${gridItemClassRaw}`).eq(i).addClass('even');
//                TweenMax.set($(`.${gridItemClassRaw}`).eq(i), {
//                   backgroundColor: '#c5c5c5',
//                   height: $(`.${gridItemClassRaw}`).width() * 1.5
//                });
//                TweenMax.set($(`.${gridItemTextClassRaw}`).eq(i), {
//                    scale: 0.4,
//                    lineHeight: $(`.${gridItemClassRaw}`).width() * 1.5 + 'px',
//                    transformOrigin: 'center'
//                });
//            } else {
//                $(`.${gridItemClassRaw}`).eq(i).addClass('odd');
//                TweenMax.set($(`.${gridItemClassRaw}`).eq(i), {
//                   backgroundColor: '#efefef',
//                   height: $(`.${gridItemClassRaw}`).width()
//                });
//                TweenMax.set($(`.${gridItemTextClassRaw}`).eq(i), {
//                    scale: 0.4,
//                    lineHeight: $(`.${gridItemClassRaw}`).width() + 'px',
//                    transformOrigin: 'center'
//                });
//            }
//        });
//        for (var i = 0; i < $(`.${gridItemClassRaw}`).length; i++) {
//            if (i % 2 === 0) {
//                $(`.${gridItemClassRaw}`).eq(i).addClass('even');
//                TweenMax.set($(`.${gridItemClassRaw}`).eq(i), {
//                   backgroundColor: '#c5c5c5',
//                   height: $(`.${gridItemClassRaw}`).width() * 1.5
//                });
//                TweenMax.set($(`.${gridItemTextClassRaw}`).eq(i), {
//                    scale: 0.4,
//                    lineHeight: $(`.${gridItemClassRaw}`).width() * 1.5 + 'px',
//                    transformOrigin: 'center'
//                });
//            } else {
//                $(`.${gridItemClassRaw}`).eq(i).addClass('odd');
//                TweenMax.set($(`.${gridItemClassRaw}`).eq(i), {
//                   backgroundColor: '#efefef',
//                   height: $(`.${gridItemClassRaw}`).width()
//                });
//                TweenMax.set($(`.${gridItemTextClassRaw}`).eq(i), {
//                    scale: 0.4,
//                    lineHeight: $(`.${gridItemClassRaw}`).width() + 'px',
//                    transformOrigin: 'center'
//                });
//            }
//        }
        setTimeout(function() {
            TweenMax.set($('.grid-item'), {
                pointerEvents: 'auto'
            });
        }, 1000);
        TweenMax.staggerTo($('.grid-column').eq(0).find('.grid-item'), 2, {
            opacity: 1,
            ease: Expo.easeOut
        }, 0.15);
        TweenMax.staggerFrom($('.grid-column').eq(0).find('.grid-item'), 2, {
            x: gridItemXStart,
            y: gridItemYStart,
            rotationX: gridItemRotationXStart,
            rotationY: gridItemRotationYStart,
            scale: gridItemScaleStart,
            ease: Expo.easeOut
        }, 0.15);
        setTimeout(function() {
                TweenMax.staggerTo($('.grid-column').eq(1).find('.grid-item'), 2, {
                    opacity: 1,
                    ease: Expo.easeOut
                }, 0.15);
                TweenMax.staggerFrom($('.grid-column').eq(1).find('.grid-item'), 2, {
                    x: gridItemXStart,
                    y: gridItemYStart,
                    rotationX: gridItemRotationXStart,
                    rotationY: gridItemRotationYStart,
                    scale: gridItemScaleStart,
                    ease: Expo.easeOut
                }, 0.15);
        }, 100);
        setTimeout(function() {
                TweenMax.staggerTo($('.grid-column').eq(2).find('.grid-item'), 2, {
                    opacity: 1,
                    ease: Expo.easeOut
                }, 0.15);
                TweenMax.staggerFrom($('.grid-column').eq(2).find('.grid-item'), 2, {
                    x: gridItemXStart,
                    y: gridItemYStart,
                    rotationX: gridItemRotationXStart,
                    rotationY: gridItemRotationYStart,
                    scale: gridItemScaleStart,
                    ease: Expo.easeOut
                }, 0.15);
        }, 200);
      $('.grid-item').on('mouseover', function() {
          TweenMax.set($(this).parent('.grid-column'), {
             zIndex: 10
          });
          TweenMax.set($(this).parent('.grid-column').siblings('.grid-column'), {
             zIndex: 0
          });
          TweenMax.set($(this), {
             zIndex: 10
          });
          TweenMax.set($(this).siblings('.grid-item'), {
             zIndex: 0
          });
          if ($(this).parent('.grid-column').hasClass('even')) {
              if ($(this).hasClass('even')) {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: 'red',
                      scale: 1.2,
                      ease: Expo.easeOut
                  }, 0);
              } else {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: 'red',
                      scale: 1.23,
                      ease: Expo.easeOut
                  }, 0);
              }
          }
          if ($(this).parent('.grid-column').hasClass('odd')) {
              if ($(this).hasClass('even')) {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: 'red',
                      scale: 1.23,
                      ease: Expo.easeOut
                  }, 0);
              } else {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: 'red',
                      scale: 1.22,
                      ease: Expo.easeOut
                  }, 0);
              }
          }
          TweenMax.to($(this).find('.grid-item-text'), 0.5 - gridItemTextDelay, {
              scale: 0.8,
              ease: Expo.easeOut,
              delay: gridItemTextDelay
          }, 0);
      });
      $('.grid-item').on('mouseout', function() {
          if ($(this).parent('.grid-column').hasClass('even')) {
              if ($(this).hasClass('even')) {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: '#c5c5c5',
                      scale: 1,
                      ease: Expo.easeOut
                  }, 0);
              } else {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: '#efefef',
                      scale: 1,
                      ease: Expo.easeOut
                  }, 0);
              }
          }
          if ($(this).parent('.grid-column').hasClass('odd')) {
              if ($(this).hasClass('even')) {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: '#efefef',
                      scale: 1,
                      ease: Expo.easeOut
                  }, 0);
              } else {
                  TweenMax.to($(this), 0.5, {
                      backgroundColor: '#c5c5c5',
                      scale: 1,
                      ease: Expo.easeOut
                  }, 0);
              }
          }
          TweenMax.to($(this).find('.grid-item-text'), 0.5 - gridItemTextDelay, {
              scale: 0.4,
              ease: Expo.easeOut,
              delay: gridItemTextDelay
          }, 0);
      });
      $('.grid-item').on('click', function() {
          var delayIncrement: 0.05;
          var random;
          var delayCol1 = 0;
          var delayCol2 = 0;
          var delayCol3 = 0;
          gridItemArray.map(function(item, i) {
              switch(true) {
                  case (i < gridItemArray.length / 3):
                     TweenMax.to(item, 0.5, {
                         y: -50,
                         ease: Circ.easeOut,
                         delay: delayCol1+=0.05,
                         onComplete: function() {
                             TweenMax.to(item, 0.5, {
                                 y: 0,
                                 ease: Circ.easeIn
                             }, 0);
                         }
                     }, 0);
                  break;
                  case (i >= gridItemArray.length / 3) && (i < (gridItemArray.length / 3) * 2):
                      setTimeout(function() {
                         TweenMax.to(item, 0.5, {
                             y: -50,
                             ease: Circ.easeOut,
                             delay: delayCol2+=0.05,
                             onComplete: function() {
                                 TweenMax.to(item, 0.5, {
                                     y: 0,
                                     ease: Circ.easeIn
                                 }, 0);
                             }
                         }, 0);
                      }, 100);
                  break;
                  case i >= (gridItemArray.length / 3) * 2:
                      setTimeout(function() {
                         TweenMax.to(item, 0.5, {
                             y: -50,
                             ease: Circ.easeOut,
                             delay: delayCol3+=0.05,
                             onComplete: function() {
                                 TweenMax.to(item, 0.5, {
                                     y: 0,
                                     ease: Circ.easeIn
                                 }, 0);
                             }
                         }, 0);
                      }, 200);
                  break;
              }
          });
      });
    },
    random(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    },
    cl: function(entry) {
      console.log(entry);  
    },
    storeGridClass: function(gridNodeClassRaw, gridNodeClass, gridRef) {
      this.setState({
          gridClassRaw: gridNodeClassRaw,
          gridClass: gridNodeClass,
          gridRef: gridRef
      });
    },
    storeGridColumnClass: function(nodeClassRaw, nodeClass, ref) {
      this.setState({
          gridColumnClassRaw: nodeClassRaw,
          gridColumnClass: nodeClass,
          gridColumnRef: ref
      });
    },
    storeGridItemClass: function(nodeClassRaw, nodeClass, ref) {
      this.setState({
          gridItemClassRaw: nodeClassRaw,
          gridItemClass: nodeClass,
          gridItemRef: ref
      });
    },
    storeGridItemTextClass: function(nodeClassRaw, nodeClass, ref) {
      this.setState({
          gridItemTextClassRaw: nodeClassRaw,
          gridItemTextClass: nodeClass,
          gridItemTextRef: ref
      });
    },
    addItemToArray: function(e) {
        var arr = this.state.gridItemArray;
        arr.push(e);
        this.setState({
           gridItemArray: arr 
        });
    },
    render: function() {
        return (
            <div className="app" ref="app">
                <Grid addItemToArray={this.addItemToArray} gridItemArray={this.state.gridItemArray} counter={this.state.counter} gridItem={this.state.gridItemRef} gridItemCount={this.state.gridItemCount} cl={this.cl} storeGridClass={this.storeGridClass} storeGridColumnClass={this.storeGridColumnClass} storeGridItemClass={this.storeGridItemClass} storeGridItemTextClass={this.storeGridItemTextClass} />
            </div>
        );
    }
});

export default App;