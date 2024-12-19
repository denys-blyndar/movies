import './add-movie.sass';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from '../../components/button';
import Input from '../../components/input';
import TextArea from '../../components/textarea';
import { addMovie } from '../../store';

function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validFormats = ['DVD', 'Blu-ray', '4K', 'HDR'];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      addMovie({
        title: data.title,
        year: data.year,
        format: data.format,
        stars: data.stars.split(','),
      }),
    ).then(() => navigate('/'));
  };

  return (
    <div className="add-movie">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <Input
            type="text"
            placeholder="Title"
            {...register('title', { required: 'Title is required' })}
            error={errors.title?.message}
          />
        </div>
        <div className="input-group">
          <Input
            type="text"
            placeholder="Year"
            {...register('year', {
              required: 'Year is required',
              validate: {
                isNumber: (value) => !isNaN(value) || 'Must be a number',
                isYear: (value) =>
                  (value.length === 4 && value >= 1850 && value <= 2024) ||
                  'Must be a valid year (1850-2024)',
              },
            })}
            error={errors.year?.message}
          />
        </div>
        <div className="input-group">
          <Input
            type="text"
            placeholder="Format"
            {...register('format', {
              required: 'Format is required',
              validate: {
                isFormat: (value) =>
                  validFormats.includes(value) ||
                  `Must be a valid format (${validFormats.join(', ')})`,
              },
            })}
            error={errors.format?.message}
          />
        </div>
        <div className="input-group">
          <TextArea
            type="text"
            placeholder="Stars"
            {...register('stars', { required: 'Stars are required' })}
            error={errors.stars?.message}
          />
        </div>
        <Button type="submit" text="Add movie" />
      </form>
    </div>
  );
}

export default AddMovie;
