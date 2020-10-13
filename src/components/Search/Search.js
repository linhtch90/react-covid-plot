import React from 'react';
import './Search.css';

export default function Search() {
    return(
        <div className="SearchBar">
          <input type="text" id="country-input" placeholder="Country..." />
          <input type="submit" id="submit-button" value="SHOW" />
        </div>
    );
}
