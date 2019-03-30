import React from 'react';
import ReactDOM from 'react-dom';

import GridColumn from './GridColumn';

var $ = require('jquery');

const Grid = React.createClass({
    componentDidMount: function() {
        var gridRef = this.refs.grid;
        var gridNode = ReactDOM.findDOMNode(this.refs.grid);
        var gridNodeClassRaw = gridNode.className;
        var gridNodeClass = $(`.${gridNodeClassRaw}`);
        this.props.storeGridClass(gridNodeClassRaw, gridNodeClass, gridRef);
    },
    render: function() {
        return (
            <div className="grid" ref="grid">
                <GridColumn addItemToArray={this.props.addItemToArray} gridItemArray={this.props.gridItemArray} columnOrder='even' grid={this.refs.grid} gridItem={this.props.gridItem} gridItemCount={this.props.gridItemCount} storeGridItemClass={this.props.storeGridItemClass} cl={this.props.cl} counter={this.props.counter} storeGridItemTextClass={this.props.storeGridItemTextClass} storeGridColumnClass={this.props.storeGridColumnClass} />
                <GridColumn addItemToArray={this.props.addItemToArray} gridItemArray={this.props.gridItemArray} columnOrder='odd' grid={this.refs.grid} gridItem={this.props.gridItem} gridItemCount={this.props.gridItemCount} storeGridItemClass={this.props.storeGridItemClass} cl={this.props.cl} counter={this.props.counter} storeGridItemTextClass={this.props.storeGridItemTextClass} storeGridColumnClass={this.props.storeGridColumnClass} />
                <GridColumn addItemToArray={this.props.addItemToArray} gridItemArray={this.props.gridItemArray} columnOrder='even' grid={this.refs.grid} gridItem={this.props.gridItem} gridItemCount={this.props.gridItemCount} storeGridItemClass={this.props.storeGridItemClass} cl={this.props.cl} counter={this.props.counter} storeGridItemTextClass={this.props.storeGridItemTextClass} storeGridColumnClass={this.props.storeGridColumnClass} />
            </div>
        );
    }
});

export default Grid;