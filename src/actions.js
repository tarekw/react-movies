import C from './constants'
import axios from 'axios';

const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

export const getResults = () => dispatch => {

    axios.get(MOVIE_API)
        .then(results => {
            console.log('got results >>>> ', results)
            dispatch({
                type: C.GET_ALL_RESULTS,
                payload: results.data.results
            })

        })
        .catch(error => {
            console.log('error fetching results .... ', error);
        })
}
