import React from 'react';
import tw, { styled } from 'twin.macro';

const Movie = ({ movie }) => {
  return (
    <MovieCard>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=''
      />
      <h1 tw='text-center font-bold text-lg '>{movie.title}</h1>
      <div tw='flex justify-between'>
        <h2 tw='uppercase'>{movie.media_type}</h2>
        <h2>{movie.release_date}</h2>
      </div>
    </MovieCard>
  );
};

export default Movie;

// Styles

const MovieCard = tw.div`
	flex flex-col justify-between
	border-2 border-gray-600 rounded
	w-80 p-2 mx-auto
	bg-gray-800
	hover:bg-white hover:text-black
`;
