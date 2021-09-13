import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import Statistics from './components/statistics/Statistics';
import FriendsList from './components/friends/FriendsList';
import friends from './data/friends.json';
import TransactionList from './components/transactions/TransactionList';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <div className="App">
      <Profile
        key={user.id}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionList transaction={transactions} />
    </div>
  );
};

export default App;
