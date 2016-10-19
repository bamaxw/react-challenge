import addJoke from './functions';

const maxreducer = (state = {jokes: [], ids: [], fail: false}, action) => {
	switch (action.type) {
		case 'ADD_JOKE':
			return addJoke(state, action.response);
		default:
			return state;
	}
}


export default maxreducer;
