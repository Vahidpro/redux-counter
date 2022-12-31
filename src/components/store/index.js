import { configureStore } from "@reduxjs/toolkit";

function counterReducer(state = { counter: 0 }, action) {
	// Check to see if the reducer cares about this action
	if (action.type === "increment") {
		// If so, make a copy of `state`
		return {
			...state,
			// and update the copy with the new value
			value: state.value + 1,
		};
	}
	if (action.type === "decrement") {
		return {
			...state,
			value: state.value - 1,
		};
	}
	// otherwise return the existing state unchanged
	return state;
}
const store = configureStore({ reducer: counterReducer });

console.log(store.getState());

export default store;
