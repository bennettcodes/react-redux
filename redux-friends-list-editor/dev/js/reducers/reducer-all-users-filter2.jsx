export default function(state = [
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
            ], action) {
    switch(action.type) {
            case 'ADD_USER':
    //            console.log(action.allUsers);
                console.log(action.thumbnail);
                var lastObj = {
                    id: action.allUsers.length,
                    fieldEmpty: true
                };
                var currentArr = action.allUsers;
                var newArr = [];
                if (action.thumbnail === '') {
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
                    id: 999,
                    fieldEmpty: true
                });
                console.log(action.allUsersFilter);
                return action.allUsersFilter2;
                break;
    }
    return state;
}