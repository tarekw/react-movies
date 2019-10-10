import React from 'react';
import { shallow } from 'enzyme';

import AllResults from './AllResults';

const mockResults = [
    {
        popularity: 622.695,
        vote_count: 1612,
        video: false,
        poster_path: "\/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        id: 475557,
        adult: false,
        backdrop_path: "\/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        original_language: "en",
        original_title: "Joker",
        genre_ids: [80, 18, 53],
        title: "Joker",
        vote_average: 8.7,
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        release_date: "2019-10-04"
    }, {
        popularity: 203.784,
        vote_count: 1398,
        video: false,
        poster_path: "\/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        id: 474350,
        adult: false,
        backdrop_path: "\/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
        original_language: "en",
        original_title: "It Chapter Two",
        genre_ids: [27],
        title: "It Chapter Two",
        vote_average: 7,
        overview: "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        release_date: "2019-09-06"
    }, {
        popularity: 170.756,
        vote_count: 4314,
        video: false,
        poster_path: "\/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        id: 429617,
        adult: false,
        backdrop_path: "\/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        original_language: "en",
        original_title: "Spider-Man: Far from Home",
        genre_ids: [28, 12, 878],
        title: "Spider-Man: Far from Home",
        vote_average: 7.6,
        overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
        release_date: "2019-07-02"
    }
];

it('should render correctly with default props', () => {
    const component = shallow(<AllResults />);
    expect(component).toMatchSnapshot();
});

it('should render correctly with mocked props', () => {
    const component = shallow(<AllResults results={mockResults} />);
    expect(component).toMatchSnapshot();
});
