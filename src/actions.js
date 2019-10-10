import C from './constants'
import axios from 'axios';

const MOVIE_LIST = 'https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie/[id]?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US';

export const getResults = () => dispatch => {
    axios.get(MOVIE_LIST)
        .then(results => {
            console.log('got all results >>>> ', results)
            dispatch({
                type: C.GET_ALL_RESULTS,
                payload: results.data.results
            })

        })
        .catch(error => {
            console.log('error fetching results .... ', error);
        })
}

export const getDetails = id => dispatch => {
    axios.get(MOVIE_DETAIL.replace('[id]', id))
        .then(results => {
            console.log('got movie detail results >>>> ', results)
            dispatch({
                type: C.GET_DETAILS,
                payload: results.data
            })

        })
        .catch(error => {
            console.log('error fetching results .... ', error);
        })
}
