import './movie-card.sass';

import { useState } from 'react';
import { func, object } from 'prop-types';

import EditMovie from '../edit-movie';
import Modal from '../../components/modal';
import EditIcon from '../../icons/edit-icon.svg';
import DeleteIcon from '../../icons/delete-icon.svg';

function MovieCard({ movie, onDeleteComplete }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMovie, setShowMovie] = useState(movie);

  const handleEditComplete = (updatedMovie) => {
    setShowMovie(updatedMovie);
    setShowEdit(false);
  };

  const handleDeleteComplete = () => {
    onDeleteComplete(movie._id);
    setShowModal(false);
  };

  let content = (
    <div className="movie-wrapper__movie">
      <p>
        <b>Title: </b>
        {showMovie.title}
      </p>
      <p>
        <b>Year: </b>
        {showMovie.year}
      </p>
      <p>
        <b>Format: </b>
        {showMovie.format}
      </p>
      <p>
        <b>Stars: </b>
        {showMovie.stars.map((star) => star.trim()).join(', ')}
      </p>
    </div>
  );

  if (showEdit) {
    content = <EditMovie movie={showMovie} onEditComplete={handleEditComplete} />;
  }

  return (
    <div className="movie-wrapper">
      {content}
      <div className="movie-wrapper__actions">
        <EditIcon className="edit" onClick={() => setShowEdit((prev) => !prev)} />
        <DeleteIcon className="delete" onClick={() => setShowModal(true)} />
      </div>
      <Modal
        showModal={showModal}
        hideModal={() => setShowModal(false)}
        remove={handleDeleteComplete}
        title="Delete Movie"
        content={`Are you sure you want to delete "<b>${showMovie.title}</b>" movie?`}
      />
    </div>
  );
}

MovieCard.propTypes = {
  movie: object,
  onDeleteComplete: func,
};

export default MovieCard;
