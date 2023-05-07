import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Board() {
    return (
      <Container>
        {[...Array(6)].map((_, row) => (
          <Row key={row}>
            {[...Array(7)].map((_, col) => (
              <div key={col} className="cell"></div>
            ))}
          </Row>
        ))}
      </Container>
    );
  }
  export default Board;

  