import './add-movie.css';

import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';

import CustomButton from '../../shared/custom-button';
import CustomInput from '../../shared/custom-input';
import CustomTextArea from '../../shared/custom-textarea';
import { isRequired, isNumber, isYear, composeValidators } from '../../shared/validators';
import { addMovie } from '../../store/actions';

const AddMovie = ({ dispatch }) => {
  const onFormSubmit = ({ title, year, format, stars }) => {
    dispatch(
      addMovie({
        title,
        year,
        format,
        stars: stars.split(','),
      }),
    );
  };

  return (
    <div className="add-movie">
      <Form onSubmit={onFormSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <Field
                component={CustomInput}
                type="text"
                name="title"
                placeholder="Title"
                validate={isRequired}
              />
            </div>
            <div className="input-group">
              <Field
                component={CustomInput}
                type="text"
                name="year"
                placeholder="Year"
                validate={composeValidators(isRequired, isNumber, isYear)}
              />
            </div>
            <div className="input-group">
              <Field
                component={CustomInput}
                type="text"
                name="format"
                placeholder="Format"
                validate={isRequired}
              />
            </div>
            <div className="input-group">
              <Field
                component={CustomTextArea}
                type="text"
                name="stars"
                placeholder="Stars"
                validate={isRequired}
              />
            </div>
            <div>
              <CustomButton type="submit" text="Add movie" />
              <Toaster position="top-center" />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

AddMovie.propTypes = {
  dispatch: func,
  handleSubmit: func,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapDispatchToProps)(AddMovie);
