import React from 'react';
import PropTypes from 'prop-types';

const AllResults = ({ results=[], handleClick=f=>f }) => {
    return results.map((item, i) => {
        return (
            <div key={item.id} onClick={() => handleClick(item.id)}>
                {item.title}
            </div>
        );
    });
}

AllResults.propTypes = {
    results: PropTypes.array.isRequired
}

export default AllResults
