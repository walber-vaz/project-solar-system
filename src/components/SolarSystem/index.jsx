import React from 'react';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import Title from '../Title';

import './planets-modules.css';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system" className="header-planets">
      <Title headline="Planetas" />
      <div className="planets">
        {planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />
        ))}
      </div>
    </div>
  );
}
