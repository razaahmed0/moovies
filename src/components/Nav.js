import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

import trending from '../assets/fire.svg';
import search from '../assets/loupe.svg';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('trending');

  return (
    <Navigation>
      <ul tw='flex justify-around max-w-5xl mx-auto list-none'>
        <Link
          to='/'
          onClick={() => setActiveLink('trending')}
          css={activeLink === 'trending' && tw`border-b-2`}
        >
          <Button>
            <img tw='w-8 p-1' src={trending} alt='' />
            <p tw='pt-1'>Trending</p>
          </Button>
        </Link>
        <Link
          to='/search'
          onClick={() => setActiveLink('search')}
          css={activeLink === 'search' && tw`border-b-2`}
        >
          <Button>
            <img tw='w-8 p-1' src={search} alt='' />
            <p tw='pt-1'>Search</p>
          </Button>
        </Link>
      </ul>
    </Navigation>
  );
};

export default Nav;

const Navigation = tw.nav`
	w-full p-4 sticky top-0 z-10
	bg-gray-800
	shadow-lg
	border-b-2 border-white
`;

const Button = tw.li`
	flex flex-col items-center
	pb-1
	cursor-pointer select-none
	transition duration-100 ease-out
	transform active:scale-75
`;
