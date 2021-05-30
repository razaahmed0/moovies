import { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import axios from 'axios';
import Nav from './components/Nav';
import Movies from './components/Movies';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getMovies = () => setCurrentPage(1);

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
    if (currentPage) {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=f096158ca602cedb5b86f00676658b68&page=${currentPage}`
        )
        .then(({ data: { results } }) =>
          setMovies(prev => {
            return [...prev, ...results];
          })
        )
        .catch(err => console.log(err));
    }
  }, [currentPage]);

  return (
    <>
      <Nav getMovies={getMovies}></Nav>
      <div tw='max-w-screen-2xl mx-auto'>
        {movies.length ? <Movies movies={movies}></Movies> : ''}
      </div>
    </>
  );
}
