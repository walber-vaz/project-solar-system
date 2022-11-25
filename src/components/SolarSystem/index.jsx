import React from 'react';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import Title from '../Title';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {planets.map(({ name, image }) => (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      ))}
    </div>
  );
}