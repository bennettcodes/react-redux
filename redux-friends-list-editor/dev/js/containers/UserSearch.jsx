import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userSearchVal, updateUserSearch, updateUsers, updateUserSearchVal, logUserSearch} from '../actions/index'

const UserSearch = React.createClass({
    componentDidUpdate: function() {
//      console.log(`New search val is ${this.state.temp}`);
//      console.log(`New parent search val is ${this.props.parent.props.userSearchVal.currentVal}`);
    },
//    updateUserSearch: function(e) {
//        this.props.returnSearchVal(this, e.target.value, this.props.parent);
//    },
    updateUserSearchVal: function(e) {
        this.props.updateUsers(e, this.props.allUsers);
        this.props.updateUserSearchVal(e);
    },
    render: function() {
        return (
            <div className="user-search">
                <input onChange={this.updateUserSearchVal} className="user-search-input" type="text" placeholder="Find User" />
            </div>
        )
    }
});

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        allUsers: state.allUsers,
        userSearchVal: state.userSearchVal
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        updateUsers: updateUsers,
        updateUserSearch: updateUserSearch,
        updateUserSearchVal: updateUserSearchVal,
        logUserSearch: logUserSearch
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserSearch);