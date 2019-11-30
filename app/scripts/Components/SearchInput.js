import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onTextChange }) => {
    const onChange =
        ({ target: { value } }) =>
            onTextChange(value);

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

SearchInput.propTypes = {
    onTextChange: PropTypes.func.isRequired
};

export default SearchInput;
