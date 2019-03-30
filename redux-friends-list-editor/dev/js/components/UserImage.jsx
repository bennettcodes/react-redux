import React from 'react';

const UserImage = React.createClass({
    componentDidMount: function() {
        TweenMax.set(this.refs.userImage, {
           backgroundImage: 'url(' + this.props.backgroundImage + ')'
        });
    },
    componentDidUpdate: function() {
        TweenMax.set(this.refs.userImage, {
           backgroundImage: 'url(' + this.props.backgroundImage + ')'
        });
    },
    render: function() {
        return (
            <div ref="userImage" className="user-image"></div>
        );
    }
});

export default UserImage;