import * as React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <>
      <h1>Pilet V1</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis illum qui nulla adipisci, laudantium
        vitae atque dicta blanditiis ab. Quae deleniti eum sapiente temporibus tenetur, maxime quibusdam iure nisi.
        <Link to="/page">Go to Pilet v2</Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda adipisci autem et nam quis, corporis
        maxime id? Commodi maiores eligendi similique velit porro consectetur! Voluptates quo autem omnis deserunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis similique veritatis nesciunt non esse commodi
        eligendi fugit officia earum distinctio. Mollitia blanditiis iusto cum pariatur quaerat fuga qui molestias
        delectus?
      </p>
    </>
  );
};
