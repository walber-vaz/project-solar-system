import PropTypes from 'prop-types';
import React from 'react';

function PlanetCard(props) {
  const { planetName, planetImage } = props;

  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
