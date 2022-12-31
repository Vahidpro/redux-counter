import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};
	const increaseHandler = () => {
		dispatch({ type: "increase", amount: 5 });
	};
	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const toggleCounterHandler = () => {};

	console.log(counter);

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={increaseHandler}>Increse By 5</button>
			<button onClick={decrementHandler}>Decrement</button>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
