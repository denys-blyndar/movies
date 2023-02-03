import './search-bar.sass';

import { useState } from 'react';
import { func } from 'prop-types';

import CustomInput from '../../shared/custom-input';
import MagnifyIcon from '../../icons/magnify-icon.svg';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(value.toLowerCase());
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
};

export default SearchBar;
