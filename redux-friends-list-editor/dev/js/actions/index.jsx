export const thumbOverUser = (payload=null) => {
//    console.log("You hovered over user: ", user.first);
    return {
        type: 'THUMB_HOVERED_OVER',
        payload
    }
};

export const thumbOutUser = (payload=null) => {
//    console.log("You hovered off of user: ", user.first);
    return {
        type: 'THUMB_HOVERED_OUT',
        payload
    }
};

export const thumbClickUser = (payload=null) => {
//    console.log("You hovered off of user: ", user.first);
    return {
        type: 'THUMB_CLICKED',
        payload
    }
};

export const hoverOverUser = (user, node=null, index=null, users) => {
//    console.log("You hovered over user: ", user.first);
    return {
        type: 'USER_HOVERED_OVER',
        payload: user,
        node,
        index,
        users
    }
};

export const hoverOutUser = (user, node=null, index=null, users) => {
//    console.log("You hovered off of user: ", user.first);
    return {
        type: 'USER_HOVERED_OUT',
        payload: user,
        node,
        index,
        users
    }
};

export const hoverOverUserOuter = (user, node=null, index=null, users) => {
//    console.log("You hovered over user: ", user.first);
    return {
        type: 'USER_HOVERED_OVER_OUTER',
        payload: user,
        node,
        index,
        users
    }
};

export const hoverOutUserOuter = (user, node=null, index=null, users) => {
//    console.log("You hovered off of user: ", user.first);
    return {
        type: 'USER_HOVERED_OUT_OUTER',
        payload: user,
        node,
        index,
        users
    }
};

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const highlightUser = (user) => {
//    console.log("You highlighted user: ", user.first);
    return {
        type: 'USER_HIGHLIGHTED',
        payload: user
    }
};

export const unhighlightUser = (user) => {
//    console.log("You unhighlighted user: ", user.first);
    return {
        type: 'USER_UNHIGHLIGHTED',
        payload: user
    }
};

//export const userSearch = (e) => {
//    return {
//        type: 'USER_SEARCH',
//        payload: e.target.value
//    }
//};

export const updateUserSearch = (e) => {
    return {
        type: 'UPDATE_USER_SEARCH',
        payload: e.target.value
    }
};

export const updateUserSearchVal = (e) => {
    return {
        type: 'UPDATE_USER_SEARCH_VAL',
        payload: e.target.value
    }
};

export const updateUsers = (e, allUsers) => {
    return {
        type: 'UPDATE_USERS',
        payload: e.target.value,
        allUsers
    }
};

export const logUserSearch = (e) => {
    return {
        type: 'LOG_USER_SEARCH',
        payload: e.target.value
    }
};

export const addUser = (first, last, age, description, thumbnail="./images/add-image.jpg", allUsers) => {
    return {
        type: 'ADD_USER',
        first,
        last,
        age,
        description,
        thumbnail,
        allUsers
    }
};

export const deleteUser = (user, node=null, index=null, users) => {
    return {
        type: 'DELETE_USER',
        payload: user,
        node,
        index,
        users
    }
};