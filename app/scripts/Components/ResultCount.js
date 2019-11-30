import React from "react";
import PropTypes from "prop-types";

const ResultCount = ({ totals: { shown, total } }) => (
    <div className="shown-results">
        <a className="results-display">
            <span className="search-count">
                { `Displaying ${shown} of ${total} Results` }
            </span>
        </a>
    </div>
);

export const totalsPropType = PropTypes.shape({
    total: PropTypes.number.isRequired,
    shown: PropTypes.number.isRequired
});

ResultCount.propTypes = totalsPropType.isRequired;

export default ResultCount;
