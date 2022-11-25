import PropTypes from 'prop-types';
import React from 'react';

import './card-mission-modules.css';

function MissionCard(props) {
  const { name, year, country, destination } = props;

  return (
    <div data-testid="mission-card" className="card-mission">
      <p data-testid="mission-name" id="name-mission">{name}</p>
      <p data-testid="mission-year" id="year-mission">{year}</p>
      <p data-testid="mission-country" id="country-mission">{country}</p>
      <p data-testid="mission-destination" id="planet-mission">{destination}</p>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
