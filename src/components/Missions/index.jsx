import React from 'react';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';
import Title from '../Title';

export default function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {missions.map(({ name, year, country, destination }, index) => (
        <MissionCard
          key={ index }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      ))}
    </div>
  );
}
