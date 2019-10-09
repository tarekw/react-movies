import React from 'react';
import { connect } from 'react-redux';

import AllResults from './containers/AllResults'
import Movie from './containers/Movie'
import { getResults, getDetails } from '../actions';

export class App extends React.Component {
    handleClick = id => {
        this.props.history.push(`/movie/${id}`);
    }

    componentDidUpdate() {
        const { id } = this.props.match.params;
        if (typeof id !== 'undefined') {
            this.props.getDetails(id);
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        if (typeof id !== 'undefined') {
            this.props.getDetails(id);
        } else {
            this.props.getResults();
        }

    }

    render() {
        const { id } = this.props.match.params;
        if (typeof id !== 'undefined') {
            return (
                <Movie />
            )
        }
        return (
            <AllResults handleClick={this.handleClick} />
        );
    }
};

const mapStateToProps = (state) => ({});
  
const mapDispatchToProps = dispatch => {
    return {
        getResults: () => {
            dispatch(getResults());
        },
        getDetails: id => {
            dispatch(getDetails(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
