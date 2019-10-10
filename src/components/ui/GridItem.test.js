import React from 'react';
import { shallow } from 'enzyme';

import GridItem from './GridItem';

const mockMovie = {
	"id": 475557,
	"poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
	"title": "Joker",
	"overview": 'overview',
	"vote_average": 8.7,
};

it('should render correctly with default props', () => {
    const component = shallow(<GridItem />);
    expect(component).toMatchSnapshot();
});

it('should render correctly with mocked props', () => {
    const component = shallow(<GridItem movie={mockMovie} />);
    expect(component).toMatchSnapshot();
});
