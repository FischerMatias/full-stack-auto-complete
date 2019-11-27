import React from 'react';

const SearchInput = ({onChange}) => {
    return (
        <input type="text"
               name="search"
               id="search"
               className="search-field"
               placeholder="Enter Search Term"
               aria-label="Enter Search Term"
               autoComplete="off"
               onChange={onChange}
        />
    );
};

export default SearchInput;