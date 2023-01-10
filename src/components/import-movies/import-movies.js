import './import-movies.css';

import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import CustomButton from '../../shared/custom-button';
import { importMovies } from '../../store/actions';

class ImportMovies extends Component {
  state = {
    selectedFile: null,
  };

  render() {
    const { dispatch } = this.props;

    const onInputChange = () => {};

    const sendFile = () => {
      dispatch(importMovies());
    };

    return (
      <div className="import-movies">
        <input type="file" onChange={onInputChange} />
        <CustomButton
          type="submit"
          text="Send"
          onClick={sendFile}
          disabled={!this.state.selectedFile}
        />
      </div>
    );
  }
}

ImportMovies.propTypes = {
  dispatch: func,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapDispatchToProps)(ImportMovies);
