import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = props => {
  const { id, type, amount, currency } = props;
  return (
    <tr className="transaction-body-item" key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
