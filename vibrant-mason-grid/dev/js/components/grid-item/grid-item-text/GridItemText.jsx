import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

const GridItemText = React.createClass({
   componentDidMount: function() {
     var ref = this.refs.itemText;
     var node = ReactDOM.findDOMNode(this.refs.itemText);
     var nodeClassRaw = node.className;
     var nodeClass = $(`.${nodeClassRaw}`);
     this.props.storeGridItemTextClass(nodeClassRaw, nodeClass, ref);
   },
    componentDidUpdate: function() {
        var ref = this.refs.itemText;
        var refClass = ref.className;
        var gridItem = this.props.gridItem;
        var columnOrder = this.props.columnOrder;
        var parent = this.props.gridItem;
        var parentHeight = parent.offsetHeight;
        if (columnOrder === 'even') {
            if (refClass === 'grid-item-text even') {
                TweenMax.set(ref, {
                    scale: 0.4,
//                    lineHeight: this.props.gridItem.offsetHeight * 1.5 + 'px',
                    transformOrigin: 'center'
                });
            }
            if (refClass === 'grid-item-text odd') {
                    TweenMax.set(ref, {
                    scale: 0.4,
//                    lineHeight: this.props.gridItem.offsetHeight + 'px',
                    transformOrigin: 'center'
                    });
            }
        }
        if (columnOrder === 'odd') {
            if (refClass === 'grid-item-text even') {
                TweenMax.set(ref, {
                    scale: 0.4,
//                    lineHeight: this.props.gridItem.offsetHeight + 'px',
                    transformOrigin: 'center'
                });
            }
            if (refClass === 'grid-item-text odd') {
                    TweenMax.set(ref, {
                    scale: 0.4,
//                    lineHeight: this.props.gridItem.offsetHeight * 1.5 + 'px',
                    transformOrigin: 'center'
                    });
            }
        }
    },
   render: function() {
       return (
        <p className={`grid-item-text ${this.props.order}`} ref="itemText">
            {this.props.gridText}
        </p>
       );
   } 
});

export default GridItemText;