import ReactDOM from 'react-dom';
import {thumbOverUser, thumbOutUser, thumbClickUser} from '../actions/index'

var $ = require('jquery');

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
        case 'USER_HOVERED_OVER':
            var thisItem = `userListItem${action.index}`;
            var theRefs = action.node.refs;
            var specificRef = theRefs[`${thisItem}`];
            TweenMax.to(specificRef, 0.5, {
                z: 25,
                ease: Back.easeOut
            }, 0);
            break;
        case 'USER_HOVERED_OUT':
            var thisItem = `userListItem${action.index}`;
            var theRefs = action.node.refs;
            var specificRef = theRefs[`${thisItem}`];
            TweenMax.to(specificRef, 0.5, {
                z: 0,
                ease: Expo.easeOut
            }, 0);
            break;
        case 'USER_HOVERED_OVER_OUTER':
            var thisItem = `userListItemOuter${action.index}`;
            var theRefs = action.node.refs;
            var specificRef = theRefs[`${thisItem}`];
            console.log(action.node.refs[`${thisItem}`]);
            TweenMax.set(action.node.refs[`${thisItem}`], {
                zIndex: 500
            });
            break;
        case 'USER_HOVERED_OUT_OUTER':
            var thisItem = `userListItemOuter${action.index}`;
            var theRefs = action.node.refs;
            var specificRef = theRefs[`${thisItem}`];
//            console.log(action.node.refs);
            TweenMax.set(action.node.refs[`${thisItem}`], {
                zIndex: 0
            });
            break;
        case 'THUMB_HOVERED_OVER':
            TweenMax.to(action.payload.refs.userImageContainer, 1, {
                scale: 1.1,
                ease: Expo.easeOut
            }, 0);
            break;
        case 'THUMB_HOVERED_OUT':
            TweenMax.to(action.payload.refs.userImageContainer, 1, {
                scale: 1,
                ease: Expo.easeOut
            }, 0);
            break;
        case 'THUMB_CLICKED':
            console.log(`JUST CLICKED ${action.payload.refs.userImageContainer}`);
            TweenMax.set(action.payload.refs.userImageContainer, {
                rotationY: 0,
                pointerEvents: 'none'
            });
            TweenMax.to(action.payload.refs.userImageContainer, 0.25, {
                rotationY: 45,
                ease: Circ.easeOut,
                onComplete: function() {
                    TweenMax.to(action.payload.refs.userImageContainer, 0.25, {
                        rotationY: 0,
                        ease: Circ.easeIn,
                        onComplete: function() {
                            TweenMax.to(action.payload.refs.userImageContainer, 3, {
                                rotationY:1080,
                                ease: Expo.easeOut,
                                onComplete: function() {
                                    TweenMax.set(action.payload.refs.userImageContainer, {
                                        pointerEvents: 'auto'
                                    })
                                }
                            }, 0);
                        }
                    }, 0);
                }
            }, 0);
            break;
        case 'USER_HIGHLIGHTED':
//            return action.payload;
            break;
        case 'USER_UNHIGHLIGHTED':
//            return null;
            break;
    }
    return state;
}
