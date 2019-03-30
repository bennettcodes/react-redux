import React from 'react';
import ReactDOM from 'react-dom';

import GridItem from './grid-item/GridItem';

var $ = require('jquery');

const GridColumn = React.createClass({
    componentDidMount: function() {
        var ref = this.refs.gridColumn;
        var node = ReactDOM.findDOMNode(this.refs.gridColumn);
        var nodeClassRaw = node.className;
        var nodeClass = $(`.${nodeClassRaw}`);
        this.props.storeGridColumnClass(nodeClassRaw, nodeClass, ref);
    },
    componentDidUpdate: function() {
    },
    random(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    },
    getGridItems: function() {
      var grid = this.props.grid;
      var itemHolder = [];
      var columnOrder = this.props.columnOrder;
      var randomNumber = this.random;
      var gridItemArray = this.props.gridItemArray;
      var addItemToArray = this.props.addItemToArray;
      var counter = this.props.counter;
      var storeGridItemTextClass = this.props.storeGridItemTextClass;
      var storeGridItemClass = this.props.storeGridItemClass;
      var cl = this.props.cl;
      var itemReturn;
      for (var i = 0; i < this.props.gridItemCount / 3; i++) {
          if (i % 2 === 0) {
              itemReturn = function() {
                  return (
                    <GridItem key={i} addItemToArray={addItemToArray} gridItemArray={addItemToArray} order='even' columnOrder={columnOrder} randomNumber={randomNumber(0, 10)} grid={grid} counter={counter} cl={cl} storeGridItemClass={storeGridItemClass} storeGridItemTextClass={storeGridItemTextClass} />
                  );
              };
          } else {
              itemReturn = function() {
                  return (
                    <GridItem key={i} addItemToArray={addItemToArray} gridItemArray={addItemToArray} order='odd' columnOrder={columnOrder} randomNumber={randomNumber(0, 10)} grid={grid} counter={counter} cl={cl} storeGridItemClass={storeGridItemClass} storeGridItemTextClass={storeGridItemTextClass} />
                  );
              };
          }
          itemHolder.push(itemReturn());
      }
          return itemHolder;
    },
    render: function() {
        return (
                <div className={`grid-column ${this.props.columnOrder}`} ref="gridColumn">
                    {this.getGridItems()}
                </div>
        );
    }
});

export default GridColumn;