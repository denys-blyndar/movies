import './home.sass';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MovieList from '../../components/movie-list';
import SearchBar from '../../components/search-bar';
import Button from '../../components/button';
import { useThunk } from '../../hooks/use-thunk';
import { getMovies, selectMovies } from '../../store';
function Home() {
  const [movieList, setMovieList] = useState(movies);
  const [sort, setSort] = useState(false);
  const [fetchMovies, isLoadingMovies, loadingMoviesError] = useThunk(getMovies);

  const movies = useSelector(selectMovies);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);

  if (isLoadingMovies) {
    return (
      <div className="loading-container">
        <div className="loading-container__spinner"></div>
      </div>
    );
  }

  if (loadingMoviesError) {
    return (
      <div className="error-fetching-data">
        <h2>Error fetching data...</h2>
      </div>
    );
  }

  const sortMovies = (data) => {
    const sortedMovies = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setMovieList(sort ? sortedMovies.reverse() : sortedMovies);
  };

  const handleSort = () => {
    setSort((prev) => !prev);
    sortMovies(movieList);
  };

  const handleSearch = (value) => {
    const query = value.toLowerCase();
    setMovieList(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(query) ||
          movie.year.toString().includes(query) ||
          movie.format.toLowerCase().includes(query) ||
          movie.stars.some((star) => star.toLowerCase().includes(query)),
      ),
    );
  };

  return (
    <div className="home">
      <div className="home__search-section">
        <SearchBar onSubmit={handleSearch} />
        <div className="button-group">
          <Button className="sort" text="Sort movies" onClick={handleSort} />
          <Button className="upload" text="Upload movies" />
        </div>
      </div>
      <div className="home__movie-list">
        {movieList && movieList.length ? (
          <MovieList movieList={movieList} />
        ) : (
          <div className="there-are-no-movies">
            <p>There are no movies to display</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
