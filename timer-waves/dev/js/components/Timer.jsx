import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');

var Timer = React.createClass({
    componentDidMount: function() {
        switch(true) {
            case this.props.isHours:
                this.props.hoursGetter(ReactDOM.findDOMNode(this.refs.numbers));
            break;
            case this.props.isMinutes:
                this.props.minutesGetter(ReactDOM.findDOMNode(this.refs.numbers));
            break;
            case this.props.isSeconds:
                this.props.secondsGetter(ReactDOM.findDOMNode(this.refs.numbers));
            break;
        }
    },
	render: function() {
		if (this.props.time < 10) {
			var time = '0' + this.props.time;
		} else {
			var time = this.props.time;
		}
		return (
			<div className={this.props.type} ref="numbers">{time}</div>
		);
	}
});

export default Timer;