import React, { useState } from 'react';
import tw from 'twin.macro';

import trending from '../assets/fire.svg';
import search from '../assets/loupe.svg';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('trending');

  return (
    <nav tw='w-full bg-gray-800 p-4 sticky top-0'>
      <ul tw='flex max-w-5xl mx-auto justify-around list-none'>
        <Button
          onClick={() => setActiveLink('trending')}
          css={[activeLink === 'trending' && tw`border-b-2`]}
        >
          <img tw='w-8 p-1' src={trending} alt='' />
          <p tw='pt-1'>Trending</p>
        </Button>
        <Button
          onClick={() => setActiveLink('search')}
          css={[activeLink === 'search' && tw`border-b-2`]}
        >
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
