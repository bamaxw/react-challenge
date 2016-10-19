export const INITIAL_STATE = {jokes: [], ids: [], fail: false};

export function addJoke(state = INITIAL_STATE, response) {

	if (typeof state.jokes === "undefined") {
		state = JSON.parse(JSON.stringify(INITIAL_STATE));
	}

	var newState = JSON.parse(JSON.stringify(state));

	if (response.type !== "success") {

  	newState.fail = true;

  } else {

		newState.fail = false;

  	if (state.ids.indexOf(response.value.id) === -1) {

  		newState.jokes = [{id: response.value.id, text: response.value.joke}, ...state.jokes];
			newState.ids = [response.value.id, ...state.ids];

  	} else {

			newState.jokes = [{id: response.value.id, text: response.value.joke}, ...state.jokes.filter(value => value.id !== response.value.id)];

		}

	}

	return newState;
}
