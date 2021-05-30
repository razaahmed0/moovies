import React from 'react';
import tw from 'twin.macro';

import trending from '../assets/fire.svg';
import search from '../assets/loupe.svg';

const Nav = ({ getMovies }) => {
  return (
    <nav tw='w-full bg-gray-800 p-4 sticky top-0'>
      <ul tw='flex max-w-5xl mx-auto justify-around list-none'>
        <Button onClick={getMovies}>
          <img tw='w-8 p-1' src={trending} alt='' />
          <p tw='pt-1'>Trending</p>
        </Button>
        <Button>
          <img tw='w-8 p-1' src={search} alt='' />
          <p tw='pt-1'>Search</p>
        </Button>
      </ul>
    </nav>
  );
};

export default Nav;

const Button = tw.li`
	flex flex-col items-center
	cursor-pointer select-none
	transition duration-100 ease-out
	transform active:scale-75
`;
