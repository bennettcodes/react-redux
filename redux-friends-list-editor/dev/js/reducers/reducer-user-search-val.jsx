/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
    switch (action.type) {
        case 'UPDATE_USER_SEARCH_VAL':
            if (action.payload) {
//                console.log(action.payload);
                return `Results for '${action.payload}'`;
            } else {
                return '';
            }
            break;
    }
    return state;
}