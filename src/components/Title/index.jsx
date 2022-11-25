import PropTypes from 'prop-types';
import React from 'react';

function Title(props) {
  const { headline } = props;

  return (
    <h2>{headline}</h2>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
