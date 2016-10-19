import React from 'react';
import ReactDOM from 'react-dom';
import {
        renderIntoDocument,
        scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import Jokes from '../src/Jokes';
import App from '../src/App';
import {expect} from 'chai';

describe('Jokes', () => {

	it('Renders a list of jokes', () => {
		let jokes = [{id: 1, text: "Text1"},{id: 2, text: "Text2"}];
		const component = renderIntoDocument(
			<Jokes jokes={jokes} />
		);

		const renderedJokes = scryRenderedDOMComponentsWithTag(component, 'div');
		expect(renderedJokes.length).to.equal(3);
	});

	

});
