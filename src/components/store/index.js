import { configureStore } from "@reduxjs/toolkit";

function counterReducer(state = { counter: 1 }, action) {
	// Check to see if the reducer cares about this action
	if (action.type === "increment") {
		// If so, make a copy of `state`
		return {
			...state,
			// and update the copy with the new value
			counter: state.counter + 1,
		};
	}

	if (action.type === "increase") {
		return {
			...state,
			counter: state.counter + action.amount,
		};
	}

	if (action.type === "decrement") {
		return {
			...state,
			counter: state.counter - 1,
		};
	}
	// otherwise return the existing state unchanged
	return state;
}
const store = configureStore({ reducer: counterReducer });

console.log(store.getState());

export default store;
