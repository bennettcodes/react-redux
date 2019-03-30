import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');

var Marker = React.createClass({
    componentDidMount: function() {
        switch(true) {
            case this.props.isHoursWaves:
                this.props.hoursWavesGetter(ReactDOM.findDOMNode(this.refs.numbers));
            break;
            case this.props.isMinutesWaves:
                this.props.minutesWavesGetter(ReactDOM.findDOMNode(this.refs.numbers));
            break;
            case this.props.isSecondsWaves:
                this.props.secondsWavesGetter(ReactDOM.findDOMNode(this.refs.numbers));
            break;
        }
    },
	render: function() {
		switch (this.props.type) {
			case 'hours':
				var measurement = 24;
				break;
			case 'minutes':
				var measurement = 60;
				break;
			case 'seconds':
				var measurement = 60;
				break;
		}
		
		var offset = (this.props.time / measurement) * 100 + '%';
		var opacity = (this.props.time / measurement * 100) / 100;
		
		var columnClasses = 'Column Column--' + this.props.type;
		var typeClasses = 'Marker Marker--' + this.props.type;
		return (
			<div className={columnClasses}>
                <h2>
				    <div className={typeClasses} ref="numbers" style={{height: offset, opacity: opacity}}></div>
                </h2>
			</div>
		);
	}
});

export default Marker;