// 영화 내용 보여주기 movie detail

import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';

const MovieCard = ({ movie }) => {
  return (
    <div
      className='movie-card'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
    >
      <div className='overlay'>
        <h4>{movie?.title}</h4>
        {movie?.genre_ids.map((genre, id) => (
          <Badge bg='danger' key={id}>
            {genre}
          </Badge>
        ))}
        <div className='certification'>
          {movie?.adult ? (
            <Badge pill bg='warning'>
              18
            </Badge>
          ) : (
            <Badge pill bg='warning'>
              All
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
