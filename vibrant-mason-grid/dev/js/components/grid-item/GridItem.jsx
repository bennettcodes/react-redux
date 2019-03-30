import React from 'react';
import ReactDOM from 'react-dom';

import GridItemText from './grid-item-text/GridItemText';

var $ = require('jquery');

const GridItem = React.createClass({
   componentDidMount: function() {
     var ref = this.refs.item;
     var node = ReactDOM.findDOMNode(this.refs.item);
     var nodeClassRaw = node.className;
     var nodeClass = $(`.${nodeClassRaw}`);
     this.props.storeGridItemClass(nodeClassRaw, nodeClass, ref);
     this.props.addItemToArray(this.refs.item);
   },
   componentDidUpdate: function() {
        this.props.updateItem;
        var grid = this.props.grid;
        var columnOrder = this.props.columnOrder;
        var ref = this.refs.item;
        var refClass = ref.className;
        TweenMax.set(ref, {
            perspective: 3000,
            perspectiveOrigin: 'center',
            transformStyle: '2d',
            width: grid.offsetWidth * 0.3,
            height: grid.offsetWidth * 0.3,
            margin: grid.offsetWidth * 0.015
        });
        if (columnOrder === 'even') {
            if (refClass === 'grid-item even') {
                TweenMax.set(ref, {
                   backgroundColor: '#c5c5c5',
                   height: ref.offsetWidth * 1.5
                });
                TweenMax.set(ref.children, {
                    lineHeight: ref.offsetWidth * 1.5 + 'px'
                });
            }
            if (refClass === 'grid-item odd') {
                TweenMax.set(ref, {
                   backgroundColor: '#efefef',
                   height: ref.offsetWidth
                });
                TweenMax.set(ref.children, {
                    lineHeight: ref.offsetWidth + 'px'
                });
            }
        }
        if (columnOrder === 'odd') {
            if (refClass === 'grid-item even') {
                TweenMax.set(ref, {
                   backgroundColor: '#efefef',
                   height: ref.offsetWidth
                });
                TweenMax.set(ref.children, {
                    lineHeight: ref.offsetWidth + 'px'
                });
            }
            if (refClass === 'grid-item odd') {
                TweenMax.set(ref, {
                   backgroundColor: '#c5c5c5',
                   height: ref.offsetWidth * 1.5
                });
                TweenMax.set(ref.children, {
                    lineHeight: ref.offsetWidth * 1.5 + 'px'
                });
            }
        }
   },
   render: function() {
       return (
        <div className={`grid-item ${this.props.order}`} ref="item">
            <GridItemText columnOrder={this.props.columnOrder} thisItem={this} gridItem={this.refs.item} order={this.props.order} gridText={this.props.randomNumber} counter={this.props.counter} cl={this.props.cl} storeGridItemTextClass={this.props.storeGridItemTextClass} />   
        </div>
       );
   } 
});

export default GridItem;