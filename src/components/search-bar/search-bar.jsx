import './search-bar.sass';

import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';

import Input from '../input';
import Button from '../button';
import MagnifyIcon from '../../icons/magnify-icon.svg';
import { changeSearchValue } from '../../store';

const SearchBar = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.movies.searchValue);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSubmit(value.toLowerCase());
  };

  const handleSearchClear = () => {
    dispatch(changeSearchValue(''));
    onSubmit('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <div className="search-bar__input-group">
          <Input
            type="text"
            placeholder="Movie search"
            value={value}
            onChange={(event) => dispatch(changeSearchValue(event.target.value))}
          />
        </div>
        <div className="search-bar__input-search">
          <MagnifyIcon onClick={handleSearchSubmit} />
        </div>
        <div className="search-bar__input-clear">
          {value && <Button text="x" onClick={handleSearchClear} />}
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: func,
};

export default SearchBar;
