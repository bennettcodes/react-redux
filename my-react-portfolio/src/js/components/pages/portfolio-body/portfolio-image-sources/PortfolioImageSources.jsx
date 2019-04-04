import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

const BannersImageSources = React.createClass({
    bannersImageSources: function() {
        return [
        'images/portfolio/banners/cbu1.jpg',
        'images/portfolio/banners/cbu2.jpg',
        'images/portfolio/banners/cbu3.jpg',
        'images/portfolio/banners/cbu4.jpg',
        'images/portfolio/banners/longo1.jpg',
        'images/portfolio/banners/longo2.jpg',
        'images/portfolio/banners/longo3.jpg',
        'images/portfolio/banners/longo4.jpg',
        'images/portfolio/banners/longo5.jpg'
            ]
    },
   render: function() {
       return {this.bannersImageSources};
   } 
});

const BillboardsImageSources = React.createClass({
    billboardsImageSources: function() {
        return [
        'images/portfolio/billboards/bb1.jpg',
        'images/portfolio/billboards/bb2.jpg',
        'images/portfolio/billboards/bb3.jpg',
        'images/portfolio/billboards/bb4.jpg',
        'images/portfolio/billboards/bb5.jpg',
        'images/portfolio/billboards/bb6.jpg',
        'images/portfolio/billboards/cbu1.jpg',
        'images/portfolio/billboards/cbu2.jpg',
        'images/portfolio/billboards/cbu3.jpg'
            ]
    },
   render: function() {
       return {this.billboardsImageSources};
   } 
});

export default {BannersImageSources, BillboardsImageSources};