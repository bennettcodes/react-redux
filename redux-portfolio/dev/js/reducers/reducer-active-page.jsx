import React from 'react';

/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

var activePage = 'About';

var $ = require('jquery');


export default function (state = activePage, action) {
    switch (action.type) {
        case 'CHANGE_PAGE':
            switch(action.payload) {
                case 'About':
                    console.log('About');
                    window.location.hash = 'about';
                    break;
                case 'Resume':
                    console.log('Resume');
                    window.location.hash = 'resume';
                    break;
                case 'Portfolio':
                    console.log('Portfolio');
                    window.location.hash = 'portfolio';
                    break;
            }
            return action.payload;
            break;
    }
    return state;
}
