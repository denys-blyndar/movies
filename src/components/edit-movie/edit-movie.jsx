import './edit-movie.sass';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { func, object } from 'prop-types';

import Button from '../../components/button';
import Input from '../../components/input';
import TextArea from '../../components/textarea';
import { editMovie } from '../../store';

function EditMovie({ movie, onEditComplete }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: movie.title,
      year: movie.year,
      format: movie.format,
      stars: movie.stars.join(', '), // Convert stars array to comma-separated string
    },
  });

  const dispatch = useDispatch();

  const handleSubmitComplete = (data) => {
    const updatedMovie = {
      ...data, // Override with updated form data
      stars: data.stars.split(',').map((star) => star.trim()), // Convert stars back to array and trim spaces
    };

    dispatch(editMovie({ id: movie._id, updatedData: updatedMovie })).then(() =>
      onEditComplete(updatedMovie),
    );
  };

  return (
    <div className="edit-movie">
      <form onSubmit={handleSubmit(handleSubmitComplete)}>
        <div className="input-group">
          <Input type="text" {...register('title')} />
        </div>
        <div className="input-group">
          <Input type="text" {...register('year')} />
        </div>
        <div className="input-group">
          <Input type="text" {...register('format')} />
        </div>
        <div className="input-group">
          <TextArea type="text" {...register('stars')} />
        </div>
        <Button type="submit" text="Save" />
      </form>
    </div>
  );
}

EditMovie.propTypes = {
  movie: object,
  onEditComplete: func,
};

export default EditMovie;
