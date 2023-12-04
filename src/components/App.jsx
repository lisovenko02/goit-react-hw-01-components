import userProfile from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile user ={userProfile}/>
    <Statistics data ={data}/>
    <FriendList friends = {friends}/>
    <TransactionHistory items = {transactions} />
    </div>
  );
};
