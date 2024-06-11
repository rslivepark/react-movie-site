import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './PopularMovieSlide.style.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/response';

const PopularMovieSlide = () => {
  const titles = ['Popular Movies', 'Top rated Movies', 'Upcoming Movies'];

  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  console.log('PopularMovieSlide', data);

  return (
    <div>
      {titles.map((item, id) => (
        <MovieSlider
          title={item}
          movies={data.results}
          responsive={responsive}
          key={id}
        />
      ))}
    </div>
  );
};

export default PopularMovieSlide;
