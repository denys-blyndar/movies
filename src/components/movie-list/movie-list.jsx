import './movie-list.sass';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { array } from 'prop-types';

import MovieCard from '../movie-card/';
import { getMovies, deleteMovie, selectDeletedMovieId } from '../../store';

function MovieList({ movieList }) {
  const dispatch = useDispatch();
  const deletedMovieId = useSelector(selectDeletedMovieId);

  useEffect(() => {
    if (deletedMovieId) {
      dispatch(getMovies());
    }
  }, [deletedMovieId, dispatch]);

  const renderedMovies = movieList.map((movie) => {
    return (
      <MovieCard
        key={movie._id}
        movie={movie}
        onDeleteComplete={(id) => dispatch(deleteMovie(id))}
      />
    );
  });

  return <div className="movie-list">{renderedMovies}</div>;
}

MovieList.propTypes = {
  movieList: array,
};

export default MovieList;
