import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CuisineDropdownMenu = ({ options, random, handle13 }) => {
  const [showing, setShowing] = useState(true);

  const handleRemoveClick = () => {
    event.preventDefault();
    setShowing(!showing);
  };

  return (
    showing && (
      <div>
        <input type='text' list='cuisine-label' onKeyPress={e => handle13(e)} />
        <datalist id='cuisine-label'>
          {options.map(option =>
            <option value={option} key={`dp${random(0, 1000000000)}`}>{option}</option>
          )}
        </datalist>
        <button onClick={handleRemoveClick}>
          <CloseIcon />
        </button>
      </div>
    )
  );
};

export default CuisineDropdownMenu;