import React from 'react';

import { Container, Slider } from './styles';

export default function Topics() {
  return (
    <Container>
      <Slider className="mode">
        <div>
          <button className="active">Placeholder Topic</button>
          {Array.from({ length: 9 }, (_, index) => (
            <button key={(index + 1).toString()}>Placeholder Topic</button>
          ))}
        </div>
      </Slider>
    </Container>
  );
}
