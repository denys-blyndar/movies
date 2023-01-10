import './search-bar.css';

import React, { useState } from 'react';
import { func, array } from 'prop-types';

import CustomInput from '../../shared/custom-input';
import MagnifyIcon from '../../icons/magnify-icon.svg';

const SearchBar = ({ onSubmit, data }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(data, value.toLowerCase());
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit}>
        <div className="search-bar__input-group">
          <CustomInput
            type="text"
            value={value}
            placeholder="Movie search"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="search-bar__input-icon">
          <MagnifyIcon onClick={onFormSubmit} />
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: func,
  data: array,
};

export default SearchBar;
