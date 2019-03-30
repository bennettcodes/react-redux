import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');

import Marker from './Marker';
import Timer from './Timer';

var $ = require('jquery');

var App = React.createClass({
	getInitialState: function() {
		return {
            hours: this.getHours(),
            minutes: this.getMinutes(),
            seconds: this.getSeconds(),
            hoursRef: '',
            minutesRef: '',
            secondsRef: '',
            hoursWavesRef: '',
            minutesWavesRef: '',
            secondsWavesRef: ''
        };
	},
	getDate: function() {
		var newdate = new Date();
		var date = {};

		date.hours = newdate.getHours();
		date.minutes = newdate.getMinutes();
		date.seconds = newdate.getSeconds();

		return date;
	},
	getHours: function() {
		var newdate = new Date();

		return newdate.getHours();
	},
	getMinutes: function() {
		var newdate = new Date();

		return newdate.getMinutes();
	},
	getSeconds: function() {
		var newdate = new Date();

		return newdate.getSeconds();
	},
	updateDate: function() {
		this.setState(this.getDate());
	},
	renderDate: function() {
		var secondOffset = (date.seconds / 60) * 100 + '%';
		var minuteOffset = (date.minutes / 60) * 100 + '%';
		var hourOffset = (date.hours / 24) * 100 + '%';

		var secondopacity = (date.seconds / 60 * 100) / 100;
		var minuteopacity = (date.minutes / 60 * 100) / 100;
		var houropacity = (date.hours / 24 * 100) / 100;
	},
    growShrink: function(e) {
        TweenMax.to(e, 0.5, {
            y: -50,
            ease:Circ.easeOut,
            onComplete: function() {
                TweenMax.to(e, 0.5, {
                    y: 0,
                    ease:Circ.easeIn
                }, 0);
            }
        }, 0);
    },
    growShrinkWaves: function(e, height) {
        TweenMax.to(e, 0.5, {
            z: 200,
            ease:Circ.easeOut,
            onComplete: function() {
                TweenMax.to(e, 0.5, {
                    z: 0,
                    ease:Circ.easeIn
                }, 0);
            }
        }, 0);
    },
    componentDidUpdate: function() {
        this.cl(`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`);
//        var secondsRef = this.state.secondsRef;
//        var secondsWavesRef = this.state.secondsWavesRef;
//        var secondsWavesRefHeight = $('.Marker--seconds').height();
//        this.cl(secondsWavesRefHeight);
//        this.growShrink(secondsRef);
//        this.growShrink(secondsWavesRef);
    },
	componentDidMount: function() {
//        TweenMax.set($('.App'), {
//            perspective:800,
//            perspectiveOrigin:'center',
//            transformStyle:'2d'
//        });
//        TweenMax.set($('.Column'), {
//            transformOrigin:'center'
//        });
		var that = this;
		setInterval(function() {
			that.updateDate();
//			TweenMax.to(secondsText, 0.5, {
//				scale: 1.5,
//				ease:Expo.easeOut,
//				onComplete: function() {
//					TweenMax.to(secondsText, 0.5, {
//						scale: 1,
//						ease:Expo.easeOut
//					}, 0);
//				}
//			}, 0);
		}, 1000);
	},
    cl: function(entry) {
        console.log(entry);
    },
    hoursGetter: function(e) {
        this.setState({
           hoursRef: e 
        });
    },
    minutesGetter: function(e) {
        this.setState({
           minutesRef: e 
        });
    },
    secondsGetter: function(e) {
        this.setState({
           secondsRef: e 
        });
    },
    hoursWavesGetter: function(e) {
        this.setState({
           hoursWavesRef: e 
        });
    },
    minutesWavesGetter: function(e) {
        this.setState({
           minutesWavesRef: e 
        });
    },
    secondsWavesGetter: function(e) {
        this.setState({
           secondsWavesRef: e 
        });
    },
	render: function() {
		return (
			<div className="App">
				<Marker type="hours" isHoursWaves={true} hoursWavesGetter={this.hoursWavesGetter} time={this.state.hours} />
				<Marker type="minutes" isMinutesWaves={true} minutesWavesGetter={this.minutesWavesGetter} time={this.state.minutes} />
				<Marker type="seconds" isSecondsWaves={true} secondsWavesGetter={this.secondsWavesGetter} time={this.state.seconds} />
				<div className="text-overlay">
					<Timer type="hours" isHours={true} hoursGetter={this.hoursGetter} time={this.state.hours} />
					<Timer type="minutes" isMinutes={true} minutesGetter={this.minutesGetter} time={this.state.minutes} />
					<Timer type="seconds" isSeconds={true} secondsGetter={this.secondsGetter} time={this.state.seconds} />
				</div>
			</div>
		);
	}
});

export default App;