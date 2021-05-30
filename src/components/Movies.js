import React from 'react';
import tw from 'twin.macro';

import Movie from './Movie';

const Movies = ({ movies }) => {
  return (
    <div
      tw='grid gap-6 m-2 p-2'
      css={{ gridTemplateColumns: 'repeat( auto-fill, minmax(320px, 1fr) )' }}
    >
      {movies.map(m => (
        <Movie key={m.id} movie={m}></Movie>
      ))}
    </div>
  );
};

export default Movies;
