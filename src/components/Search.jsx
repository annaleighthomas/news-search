import React from 'react';
import PropTypes from 'prop-types';


const Search = ({ search, onChange, onSubmit }) => {

  return (<>
    <form onSubmit={onSubmit}>
      <input name="search" value={search} onChange={onChange} />
      <button>Submit</button>
    </form>
  </>);

};

Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Search;
