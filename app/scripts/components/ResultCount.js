import React from 'react';

const ResultCount = ({metadata: { shown, total }}) => (
    <div className="shown-results">
        <a className="results-display">
           <span className="search-count">
               { `Displaying ${shown} of ${total} Results` }
           </span>
        </a>
    </div>
);

export default ResultCount;