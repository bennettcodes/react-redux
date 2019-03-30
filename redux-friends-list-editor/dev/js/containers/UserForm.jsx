import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {users, allUsers, userSearchVal, addUser} from '../actions/index';

const UserForm = React.createClass({
    componentDidUpdate: function() {
//      console.log(`New search val is ${this.state.temp}`);
//      console.log(`New parent search val is ${this.props.parent.props.userSearchVal.currentVal}`);
    },
//    addUserSearch: function(e) {
//        this.props.returnSearchVal(this, e.target.value, this.props.parent);
//    },
    addUser: function(e) {
        e.preventDefault();
        if (
            (this.refs.userAddFirst.value !== '') &&
            (this.refs.userAddLast.value !== '') &&
            (this.refs.userAddAge.value !== '') &&
            (this.refs.userAddDescription.value !== '')
           ) {
            var first = this.refs.userAddFirst;
            var last = this.refs.userAddLast;
            var age = this.refs.userAddAge;
            var description = this.refs.userAddDescription;
            var thumbnail = this.refs.userAddThumbnail;
            this.props.addUser(first.value, last.value, age.value, description.value, thumbnail.value, this.props.allUsers);
            first.value = '';
            last.value = '';
            age.value = '';
            description.value = '';
            thumbnail.value = '';
            first.focus();
        }
    },
    render: function() {
        return (
            <form className="user-form">
                <input className="user-add-input" type="text" placeholder="First Name" ref="userAddFirst" />
                <input className="user-add-input" type="text" placeholder="Last Name" ref="userAddLast" />
                <input className="user-add-input" type="text" placeholder="Age" ref="userAddAge" />
                <input className="user-add-input" type="text" placeholder="Description" ref="userAddDescription" />
                <input className="user-add-input" type="text" placeholder="Image URL" ref="userAddThumbnail" />
                <button className="user-add-button" onClick={this.addUser}>Add User</button>
            </form>
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
        addUser: addUser
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserForm);