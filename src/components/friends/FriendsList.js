import React from 'react';
import FriendsListItem from './FriendListItem';
import PropTypes from 'prop-types';
import './Friends.css';

const FriendsList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
