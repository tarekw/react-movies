import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movieDetails={} }) => {
    return (
        <React.Fragment>
            <div>
                {movieDetails.title}
            </div>
            <div>
                {movieDetails.overview}
            </div>
        </React.Fragment>
    )
}

Movie.propTypes = {
    movieDetails: PropTypes.object.isRequired
}

export default Movie
