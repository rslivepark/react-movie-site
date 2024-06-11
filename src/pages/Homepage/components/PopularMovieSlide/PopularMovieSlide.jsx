import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PopularMovieSlide.style.css';
import MovieCard from '../MovieCard/MovieCard';

const PopularMovieSlide = () => {
  // const titles = ['Popular Movies', 'Top rated Movies', 'Upcoming Movies'];

  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log('PopularMovieSlide', data);

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieSlide;
