import React from 'react';

import { MarqueeContainer, Track } from './styles';

export default function Topics() {
  return (
    <MarqueeContainer>
      <Track>
        <div>
          <button className="active">Placeholder Topic</button>
          {Array.from({ length: 9 }, (_, index) => (
            <button key={(index + 1).toString()}>Placeholder Topic</button>
          ))}
          {Array.from({ length: 9 }, (_, index) => (
            <button key={(index + 1).toString()}>Placeholder Topic</button>
          ))}
        </div>
      </Track>
    </MarqueeContainer>
  );
}
