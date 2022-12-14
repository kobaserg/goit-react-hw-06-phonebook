import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isFilter } from 'redux/phonebookSlice';

export function Filter() {
  const dispatch = useDispatch();
  function handleFilter(event) {
    dispatch(isFilter(event.target.value));
  }

  return (
    <div>
      <h3>Find contact by Name</h3>
      <label>
        <input type="text" onChange={handleFilter}></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  props: PropTypes.object,
};
