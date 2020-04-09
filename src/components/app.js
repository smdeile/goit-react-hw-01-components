import React from 'react';
import user from './profile/user.json';
import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import statisticalData from './statistics/statistical-data.json';
import friends from './friendList/friends.json';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from './transactions/transactions';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={`#${user.tag}`}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
