

var $ = require('jquery');

let users = [
                {
                    id: 1,
                    first: "Bennett",
                    last: "Waisbren",
                    age: 26,
                    description: "Bennett is a Front-end developer specializing in React.",
                    thumbnail: "https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13975560_10154495387060972_6828618093329981795_o.jpg"
                },
                {
                    id: 2,
                    first: "Alex",
                    last: "Naraghi",
                    age: 26,
                    description: "Alex is a software developer who works in the mobile gaming market.",
                    thumbnail: "https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/11164646_10207134404540749_5718516277103149219_o.jpg"
                },
                {
                    id: 3,
                    first: "Samuel",
                    last: "Hung",
                    age: 28,
                    description: "Samuel is a digital animator working for a custom computer building company.",
                    thumbnail: "https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/10945892_10204995402418121_5269782590692810396_o.jpg"
                },
                {
                    id: 4,
                    first: "Erin Beatrice",
                    last: "Schwarz",
                    age: 26,
                    description: "Erin is a PHP developer living in Russia.",
                    thumbnail: "https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13958148_10154232691716830_3236218676986966721_o.jpg"
                },
                {
                    id: 5,
                    first: "Greg",
                    last: "Yagan",
                    age: 26,
                    description: "Greg is a marketing professional currently backpacking throughout Europe.",
                    thumbnail: "https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13987505_10209027376094943_5728483305251409053_o.jpg"
                },
                {
                    id: 6,
                    first: "Maggie",
                    last: "Anderson",
                    age: 26,
                    description: "Maggie is a child development major and a graduate of UCLA.",
                    thumbnail: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/1910196_21709953145_7073_n.jpg?oh=b02dfa32b223fc8b85796c576e02c101&oe=5810B4D4"
                },
                {
                    id: 999,
                    fieldEmpty: true
                }
            ];

export default function(state = users, action) {
    
    switch (action.type) {
        case 'UPDATE_USERS':
            var payload = action.payload;
            if (payload !== '') {
                TweenMax.set($('.user-list-item-delete'), {
                    display: 'none'
                });
            } else {
                TweenMax.set($('.user-list-item-delete'), {
                    display: 'initial'
                });
            }
            payload = payload.toString();
            payload = payload.toLowerCase();
            payload = payload.replace(/\s+/g,"");
            var allUsers = users;
            var newArr = [];
            allUsers.map(function(item, i) {
                var itemName = `${item.first} ${item.last}`;
                itemName = itemName.toString();
                itemName = itemName.toLowerCase();
                itemName = itemName.replace(/\s+/g,"");
                if (itemName.startsWith(payload)) {
                    newArr.push(item);
                } else {
                    console.log('nope');
                }
            });
            var newArrLength = newArr.length;
            newArr.push({
                id: parseInt(users.length),
                fieldEmpty: false
            });
            if (action.payload !== '') {
                return newArr;
            } else {
                return users
            }
            break;
        case 'ADD_USER':
            console.log(action.thumbnail);
            var lastObj = {
                id: action.allUsers.length,
                fieldEmpty: true
            };
            var currentArr = users;
            var newArr = [];
            function checkURL(url) {
                return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
            }
            if (checkURL(action.thumbnail)) {
                console.log('is image');
            } else if (action.thumbnail === '') {
                action.thumbnail = './images/add-image.jpg';
            } else {
                action.thumbnail = './images/add-image.jpg';
            }
            currentArr.map(function(item, i) {
                if (i < currentArr.length - 1) {
                    newArr.push(item);
                } else {
                    newArr.push({
                        id: i + 1,
                        first: action.first,
                        last: action.last,
                        age: action.age,
                        description: action.description,
                        thumbnail: action.thumbnail
                    });
                }
            });
            newArr.push({
                id: newArr.length + 1,
                fieldEmpty: true
            });
            users = newArr;
            return newArr;
            break;
        case 'DELETE_USER':
            var thisItem = `userListItem${action.index}`;
            var theRefs = action.node.refs;
            var specificRef = theRefs[`${thisItem}`];
            var theseUsers = users;
            var newArr = [];
            var emptyArr = [];
            var newCounter = 1;
            console.log(specificRef);
            theseUsers.map(function(user, i) {
                if (!(i === action.index)) {
                    newArr.push({
                        id: newCounter++,
                        first: user.first,
                        last: user.last,
                        age: user.age,
                        description: user.description,
                        thumbnail: user.thumbnail
                    });
                }
            });
            users = newArr;
            return users;
            break;
    }
    return state;
}