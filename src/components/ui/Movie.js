import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w300/';

const Movie = ({ movieDetails={} }) => (
    <React.Fragment>
        <CardMedia
            style={{height: 450, width: 300}}
            image={IMAGE_BASE+movieDetails.poster_path}
        />
        <Rating name="half-rating" value={(movieDetails.vote_average / 10) * 5} precision={0.5} />
        <Typography gutterBottom variant="headline" component="h2">
            Title: {movieDetails.title}
        </Typography>
        <Typography gutterBottom variant="headline" component="h2">
            Description: {movieDetails.overview}
        </Typography>
    </React.Fragment>
);

Movie.propTypes = {
    movieDetails: PropTypes.object
}

export default Movie
