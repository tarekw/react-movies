import Movie from '../ui/Movie'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
    movieDetails: state.movieDetails,
});

export default connect(mapStateToProps)(Movie);
