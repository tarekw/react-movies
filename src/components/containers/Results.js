import Results from '../ui/Results'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
    results: state.results
});

export default connect(mapStateToProps)(Results);
