import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import './Transactions.css';

const TransactionList = ({ transaction }) => (
  <table className="transaction-history">
    <thead className="transaction-head">
      <tr>
        <th className="transaction-head-item">Type</th>
        <th className="transaction-head-item">Amount</th>
        <th className="transaction-head-item">Currency</th>
      </tr>
    </thead>
    <tbody>
      {transaction.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionList.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionList;
