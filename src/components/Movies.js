import React from 'react';
import tw from 'twin.macro';

import Movie from './Movie';

const Movies = ({ movies }) => {
  return (
    <div
      tw='grid gap-y-6 gap-x-8 w-5/6 mx-auto my-10'
      css={{ gridTemplateColumns: 'repeat( auto-fill, minmax(320px, 1fr) )' }}
    >
      {movies.map(m => (
        <Movie key={m.id} movie={m}></Movie>
      ))}
    </div>
  );
};

export default Movies;
