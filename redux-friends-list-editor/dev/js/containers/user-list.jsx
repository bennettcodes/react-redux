import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, updateUsers, deleteUser, hoverOverUser, hoverOutUser, hoverOverUserOuter, hoverOutUserOuter, updateUserSearchVal} from '../actions/index';

import UserSearch from './UserSearch';
import UserForm from './UserForm';

var $ = require('jquery');

const UserList = React.createClass({
    componentDidMount: function() {
        var thisRefs = this.refs;
            console.log(thisRefs);
    },
    
    renderList: function() {
        return this.props.allUsers.map((user, i) => {
            if (i !== this.props.allUsers.length - 1) {
                if (i % 2 === 0) {
                    return (
                        <div className="user-list-item-outer"
                            onMouseOver={() => this.props.hoverOverUserOuter(user, this, i, this.props.allUsers)}
                            onMouseOut={() => this.props.hoverOutUserOuter(user, this, i, this.props.allUsers)}
                            ref={`userListItemOuter${i}`}
                            key={user.id}
                            >
                            <div className="user-list-item light-item"
                                    onMouseOver={() => this.props.hoverOverUser(user, this, i, this.props.allUsers)}
                                    onMouseOut={() => this.props.hoverOutUser(user, this, i, this.props.allUsers)}
                                    ref={`userListItem${i}`}
                                >
                                <li
                                    className="user-list-item-title"
                                    onClick={() => this.props.selectUser(user)}
                                >
                                    {user.first} {user.last}
                                </li>
                                <div className="user-list-item-delete" onClick={() => this.props.deleteUser(user, this, i, this.props.allUsers)}>x</div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="user-list-item-outer"
                            onMouseOver={() => this.props.hoverOverUserOuter(user, this, i, this.props.allUsers)}
                            onMouseOut={() => this.props.hoverOutUserOuter(user, this, i, this.props.allUsers)}
                            ref={`userListItemOuter${i}`}
                            key={user.id}
                            >
                            <div className="user-list-item dark-item"
                                    onMouseOver={() => this.props.hoverOverUser(user, this, i, this.props.allUsers)}
                                    onMouseOut={() => this.props.hoverOutUser(user, this, i, this.props.allUsers)}
                                    ref={`userListItem${i}`}
                                >
                                <li
                                    className="user-list-item-title"
                                    onClick={() => this.props.selectUser(user)}
                                >
                                    {user.first} {user.last}
                                </li>
                                <div className="user-list-item-delete" onClick={() => this.props.deleteUser(user, this, i, this.props.allUsers)}>x</div>
                            </div>
                        </div>
                    );
                }
            } else {
                if (i % 2 === 0) {
                    return (
                        <div className="user-list-item-outer"
                            onMouseOver={() => this.props.hoverOverUserOuter(user, this, i, this.props.allUsers)}
                            onMouseOut={() => this.props.hoverOutUserOuter(user, this, i, this.props.allUsers)}
                            ref={`userListItemOuter${i}`}
                            key={user.id}
                            >
                            <div className="user-list-item last-item light-item"
                                    onMouseOver={() => this.props.hoverOverUser(user, this, i, this.props.allUsers)}
                                    onMouseOut={() => this.props.hoverOutUser(user, this, i, this.props.allUsers)}
                                    ref={`userListItem${i}`}
                                >
                                <li
                                    className="user-list-item-title"
                                    onClick={() => this.props.selectUser(user)}
                                >
                                    {user.first} {user.last}
                                </li>
                                <div className="user-list-item-delete" onClick={() => this.props.deleteUser(user, this, i, this.props.allUsers)}>x</div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="user-list-item-outer"
                            onMouseOver={() => this.props.hoverOverUserOuter(user, this, i, this.props.allUsers)}
                            onMouseOut={() => this.props.hoverOutUserOuter(user, this, i, this.props.allUsers)}
                            ref={`userListItemOuter${i}`}
                            key={user.id}
                            >
                            <div className="user-list-item last-item dark-item"
                                    onMouseOver={() => this.props.hoverOverUser(user, this, i, this.props.allUsers)}
                                    onMouseOut={() => this.props.hoverOutUser(user, this, i, this.props.allUsers)}
                                    ref={`userListItem${i}`}
                                >
                                <li
                                    className="user-list-item-title"
                                    onClick={() => this.props.selectUser(user)}
                                >
                                    {user.first} {user.last}
                                </li>
                                <div className="user-list-item-delete" onClick={() => this.props.deleteUser(user, this, i, this.props.allUsers)}>x</div>
                            </div>
                        </div>
                    );
                }
            }
//            TweenMax.set(`thisRefs.userListItemOuter${i}`, {
//                perspective: 800,
//                perspectiveOrigin: 'center',
//                transformStyle: '2d'
//            });
        });
    },
    
//    returnSearchVal: function(child, value, parent) {
//        child.setState({
//           temp: value
//        });
//        var arr = parent.props.allUsers;
//        console.log(`Array is: ${arr[0].first}`);
//        let revisedArray = arr.map(function(user, i) {
//            if (arr[i].first.startsWith(value)) {
//                console.log(`Correct first name: ${arr[i].first}`);
//            }
//        });
//        arr = revisedArray;
//        console.log(arr);
//    },

    render: function() {
        return (
            <ul className="user-list" ref="userList">
                <UserSearch />
                <h2 className="user-heading">User List</h2>
                {this.renderList()}
                <div className="current-search-value">{this.props.userSearchVal}</div>
                <div className="current-users">{this.props.allUsers[0].first}</div>
                <UserForm />
            </ul>
        );
    }
});

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        allUsers: state.allUsers,
        allUsersFilter: state.allUsersFilter,
        allUsersFilter2: state.allUsersFilter2,
        userSearch: state.userSearch,
        userSearchVal: state.userSearchVal
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser: selectUser,
        updateUsers: updateUsers,
        deleteUser: deleteUser,
        hoverOverUser: hoverOverUser,
        hoverOutUser: hoverOutUser,
        hoverOverUserOuter: hoverOverUserOuter,
        hoverOutUserOuter: hoverOutUserOuter
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
