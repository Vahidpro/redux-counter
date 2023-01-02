import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterAcions } from "./store";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const show = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		dispatch(counterAcions.increment());
	};
	const increaseHandler = () => {
		dispatch(counterAcions.increase(5));
	};
	const decrementHandler = () => {
		dispatch(counterAcions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterAcions.toggleCounter());
	};

	console.log(counter);

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={increaseHandler}>Increse By 5</button>
			<button onClick={decrementHandler}>Decrement</button>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
