import React from 'react';
import './Banner.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';

/*
1. api 호출하기
1-1. api 호출 hook 만들어 준다(usePopularMovies)
*/

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log('data? ', data);

  if (isLoading) {
    <h4>Loading...</h4>;
  }

  if (isError) {
    <Alert variant='dark'>{error.message}</Alert>;
  }

  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path})`,
      }}
    >
      <div className='text-white banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
