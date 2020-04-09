import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import FriendsListItem from './FriendsListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(el => (
      <FriendsListItem
        key={el.id}
        isOnline={el.isOnline}
        avatar={el.avatar}
        name={el.name}
      />
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.bool,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;
