import {expect} from 'chai';

import {addJoke, INITIAL_STATE} from '../src/functions';

describe('State altering functions', () => {

	describe('addJoke', () => {

		it("doesn't mutate objects", () => {
			const state = {};
			const newState = addJoke(state, {type: "success", value: {id: 1, text: "Joke"}});

			expect(state).not.deep.equal(newState);
			expect(state).not.deep.equal(INITIAL_STATE);
		});

		it('adds one joke to the jokes list', () => {
			const state = {jokes: [], ids: [], fail: false};
			const newState = addJoke(state, {type: "success", value: {id: 1, joke: "Chuck Norris joke!"}});
			
			expect(newState).to.deep.equal({jokes: [{id: 1, text: "Chuck Norris joke!"}], ids: [1], fail: false});
		});

		it('initiates state if empty', () => {
			const newState = addJoke({}, {type: "success", value: {id: 1, joke: "Chuck Norris joke!"}});
      
			expect(newState).to.deep.equal({jokes: [{id: 1, text: "Chuck Norris joke!"}], ids: [1], fail: false});
		});

		it('changes fail flag to true if http request failed', () => {
			const newState = addJoke({}, {type: "failure"});
			expect(newState).to.deep.equal({jokes: [], ids: [], fail: true});
		});

		it('changes fail flag back to false after successfull http request', () => {
			const state = {jokes: [], ids: [], fail: true};
			const newState = addJoke(state, {type: "success", value: {id: 1, joke: "Chuck Norris joke!"}});
			
			expect(newState).to.deep.equal({jokes: [{id: 1, text: "Chuck Norris joke!"}], ids: [1], fail: false});
		});

		it('moves joke to the top of the list in case it appears again', () => {
			const state = {jokes: [{id: 1, text: "Chuck Norris joke 1!"}, {id: 2, text: "Chuck Norris joke 2!"}], ids: [1,2], fail: false};
			expect(state).not.deep.equal({jokes: [{id: 2, text: "Chuck Norris joke 2!"}, {id: 1, text: "Chuck Norris joke 1!"}], ids: [1,2], fail: false});

			const newState = addJoke(state, {type: "success", value: {id: 2, joke: "Chuck Norris joke 2!"}});

			expect(newState).to.deep.equal({jokes: [{id: 2, text: "Chuck Norris joke 2!"}, {id: 1, text: "Chuck Norris joke 1!"}], ids: [1,2], fail: false});
		});
	});

});
