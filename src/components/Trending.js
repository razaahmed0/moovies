import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movies from './Movies';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const scrolling_function = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCurrentPage(current => {
          return current + 1;
        });
      }
    };
    window.addEventListener('scroll', scrolling_function);
    return () => window.removeEventListener('scroll', scrolling_function);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=f096158ca602cedb5b86f00676658b68&page=${currentPage}`
      )
      .then(({ data: { results } }) =>
        setTrending(prev => {
          return [...prev, ...results];
        })
      )
      .catch(err => console.log(err));
  }, [currentPage]);
  return <>{trending.length ? <Movies movies={trending}></Movies> : ''}</>;
};

export default Trending;