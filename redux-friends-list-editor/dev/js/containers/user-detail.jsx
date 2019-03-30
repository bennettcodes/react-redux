import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UserImage from '../components/UserImage';

import {thumbOverUser, thumbOutUser, thumbClickUser} from '../actions/index'

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

const UserDetail = React.createClass({
//    thumbOverUser: function() {
//        this.props.thumbOverUser(this.refs.userImageContainer);
//    },
//    thumbOutUser: function() {
//        this.props.thumbOutUser(this.refs.userImageContainer);
//    },
//    thumbClickUser: function() {
//        this.props.thumbClickUser(this.refs.userImageContainer);
//    },
    determineRender: function() {
        if (!this.props.user) {
            return (
                <p>Select a user...</p>
            );
        } else {
            return (
                <div>
                    <div className="user-image-container" onMouseOver={() => this.props.thumbOverUser(this)} onMouseOut={() => this.props.thumbOutUser(this)} onClick={() => this.props.thumbClickUser(this)} ref="userImageContainer">
                        <UserImage ref="userImage" backgroundImage={this.props.user.thumbnail} />
                    </div>
                    <div className="user-text-container">
                        <h2 className="user-text user-name">{this.props.user.first} {this.props.user.last}</h2>
                        <h3 className="user-text user-age">Age: <span className="user-age-number">{this.props.user.age}</span></h3>
                        <h3 className="user-text user-id">ID: <span className="user-id-number">{this.props.user.id}</span></h3>
                        <h3 className="user-text user-description">{this.props.user.description}</h3>
                    </div>
                </div>
            );
        }
    },
    render: function() {
        return (
            <div className="user-details">
                <h2 className="user-heading">User Details</h2>
                {this.determineRender()}
            </div>
        )
    }
});

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        users: state.users,
        user: state.activeUser,
        refs: state.refs
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        thumbOverUser: thumbOverUser,
        thumbOutUser: thumbOutUser,
        thumbClickUser: thumbClickUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
