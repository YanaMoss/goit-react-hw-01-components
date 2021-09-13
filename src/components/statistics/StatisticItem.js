import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = props => {
  const { id, label, percentage } = props;
  return (
    <li className="stat-item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
