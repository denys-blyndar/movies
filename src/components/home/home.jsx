import './home.sass';

import { Component } from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';

import SearchBar from '../search-bar';
import Modal from '../../shared/modal';
import DeleteIcon from '../../icons/delete-icon.svg';
import CustomButton from '../../shared/custom-button';
import { deleteMovie } from '../../store/actions';

class Home extends Component {
  state = {
    movies: this.props.movies,
    selectedMovie: null,
    sort: false,
    modalOpen: false,
    movieId: null,
  };

  render() {
    const { dispatch } = this.props;
    const { movies, selectedMovie, sort, modalOpen, movieId } = this.state;

    const sortMovies = (data) => {
      data.sort((a, b) => a.title.localeCompare(b.title));
      this.setState({ movies: sort ? data.reverse() : data });
    };

    const getSearchCondition = (movie, query) => {
      const sanitizeMovieValue = (value) => value.toString().toLowerCase();

      if (movie) {
        return Object.keys(movie).some((key) => {
          if (Array.isArray(movie[key])) {
            movie[key].some((star) => {
              return sanitizeMovieValue(star.includes(query));
            });
          }

          return sanitizeMovieValue(movie[key]).includes(query);
        });
      }

      return false;
    };

    const searchMovie = (value) => {
      this.setState({
        movies: value
          ? movies.filter((movie) => getSearchCondition(movie, value))
          : this.props.movies,
      });
    };

    return (
      <div className="home">
        <Modal
          modalOpen={modalOpen}
          modalHidden={() => this.setState({ modalOpen: false })}
          remove={() => dispatch(deleteMovie(movieId))}
          title="Delete Movie"
          content={
            selectedMovie ? `Are you sure you want to delete "${selectedMovie.title}" movie?` : null
          }
        />
        <div className="home__search-section">
          <SearchBar onSubmit={searchMovie} />
          <CustomButton
            text="Sort by title (A-Z)"
            onClick={() => {
              this.setState({ sort: true });
              sortMovies(movies);
            }}
          />
          {selectedMovie && (
            <div className="movie-shown">
              <div className="movie-shown__title">
                <p>
                  <b>{selectedMovie.title}</b>
                </p>
              </div>
              <p>
                <b>Year: </b>
                {selectedMovie.year}
              </p>
              <p>
                <b>Format: </b>
                {selectedMovie.format}
              </p>
              <p>
                <b>Stars: </b>
                {selectedMovie.stars.map((star) => star.trim()).join(', ')}
              </p>
            </div>
          )}
        </div>
        <div className="home__movie-list">
          {movies && movies.length ? (
            movies.map((movie) => {
              return (
                <div
                  key={movie._id}
                  className="movie-wrapper"
                  onClick={() => this.setState({ selectedMovie: movie })}
                >
                  <div className="movie-wrapper__movie">
                    <p>
                      <b>Title: </b>
                      {movie.title}
                    </p>
                    <p>
                      <b>Year: </b>
                      {movie.year}
                    </p>
                    <p>
                      <b>Format: </b>
                      {movie.format}
                    </p>
                    <p>
                      <b>Stars: </b>
                      {movie.stars.map((star) => star.trim()).join(', ')}
                    </p>
                  </div>
                  <div className="movie-wrapper__icon">
                    <DeleteIcon
                      onClick={() => {
                        this.setState({ modalOpen: true });
                        this.setState({ movieId: movie._id });
                      }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="there-are-no-movies">
              <p>There are no movies to display</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: func,
  movies: array,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapDispatchToProps)(Home);
