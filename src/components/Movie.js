import React from 'react';
import tw, { styled } from 'twin.macro';

const Movie = ({ movie }) => {
  return (
    <MovieCard>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=''
      />
      <Title>{movie.title}</Title>
      <div tw='flex justify-between p-1'>
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
	transition duration-300 ease-out
	shadow-md hover:shadow-2xl
	cursor-pointer
`;

const Poster = tw.img`
	transition duration-300 ease-out
	transform hover:scale-125 hover:translate-y-10
	rounded
`;

const Title = tw.h1`
	text-center font-bold text-lg
	pt-3
	whitespace-nowrap overflow-ellipsis overflow-hidden
`;
