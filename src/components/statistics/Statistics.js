import React from 'react';
import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = props => {
  const { stats, title } = props;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
