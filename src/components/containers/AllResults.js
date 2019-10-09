import AllResults from '../ui/AllResults'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
    results: state.results,
    handleClick: props.handleClick
});

export default connect(mapStateToProps)(AllResults);
