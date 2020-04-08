import React from 'react';
import styles from './friendList.module.css';
const FriendsListItem = ({ id, isOnline, avatar, name }) => (
  <>
    <li className={styles.item} key={id}>
      <span className={styles.status}>
        {isOnline ? (
          <div className={styles.online}></div>
        ) : (
          <div className={styles.offline}></div>
        )}
      </span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  </>
);

export default FriendsListItem;
