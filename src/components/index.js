import React from 'react';
import { connect } from 'react-redux';

import Results from './containers/Results'
import { getResults } from '../actions';

export class App extends React.Component {
    componentDidMount() {
        this.props.getResults();
    }

    render() {
        return (
            <div>
                <Results />
            </div>
        );
    }
};

const mapStateToProps = (state) => ({});
  
const mapDispatchToProps = dispatch => {
    return {
        getResults: () => {
            dispatch(getResults());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
