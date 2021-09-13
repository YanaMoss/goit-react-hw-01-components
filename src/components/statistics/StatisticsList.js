import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

const StatisticsList = ({ stats }) => (
  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <StatisticItem key={id} label={label} percentage={percentage} />
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
