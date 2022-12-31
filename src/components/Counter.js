import { connect } from "react-redux";

import classes from "./Counter.module.css";
import { Component } from "react";

class Counter extends Component {
	incrementHandler() {
		this.props.increment();
	}
	decrementHandler() {
		this.props.decrement();
	}
	toggleCounterHandler() {}

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<button onClick={this.incrementHandler.bind(this)}>Increment</button>
				<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};
const mapDispatchToProps = (state) => {
	return {
		increment: () => dispatchEvent({ type: "increment" }),
		decrement: () => dispatchEvent({ type: "decrement" }),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
