export const giveName = (payload=null) => {
//    console.log("You hovered over user: ", user.first);
    return {
        type: 'GIVE_NAME',
        payload
    }
};

export const changePage = (payload=null) => {
//    console.log("You hovered over user: ", user.first);
    return {
        type: 'CHANGE_PAGE',
        payload
    }
};