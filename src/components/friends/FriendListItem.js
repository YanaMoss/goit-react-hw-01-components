import React from 'react';
import PropTypes from 'prop-types';

const FriendsListItem = props => {
  const { id, avatar, name, isOnline } = props;
  return (
    <li className="item" key={id}>
      {isOnline ? (
        <span className="status isOnline"></span>
      ) : (
        <span className="status"></span>
      )}
      <img className="friend-avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
