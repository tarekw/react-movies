import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results=[] }) => {
    return results.map((item, i) => {
        return (
            <div key={item.id}>
                {item.title}
            </div>
        );
    });
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results
