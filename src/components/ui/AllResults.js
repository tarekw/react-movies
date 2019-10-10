import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import GridItem from './GridItem';

const AllResults = ({ results=[], handleClick=f=>f }) => {
    return (
        <Grid container spacing={10} style={{padding: 24}}>
            { results.map(item => (
                <div key={item.id} onClick={() => handleClick(item.id)}>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <GridItem movie={item} />
                    </Grid>
                </div>
            )) }
        </Grid>
    );
}

AllResults.propTypes = {
    results: PropTypes.array
}

export default AllResults
