import './App.css';

// Esto se utilizaba antes, esto es legacy
// connect
// mapStateToProps
// mapDispatchToProps

import { increment, decrement, signIn } from './actions/index';

import { useSelector, useDispatch } from 'react-redux';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleLog = () => {
		dispatch(signIn());
	};

	return (
		<div className='App'>
			<h1>Aprendiendo sobre Redux!</h1>
			<p>Counter: {counter}</p>
			<button onClick={handleIncrement}>INCREMENTER</button>
			<button onClick={handleDecrement}>DECREMENTAR</button>

			{isLogged ? <p>Usuario Logueado!</p> : <p>Usuario No Logueado</p>}

			<button onClick={handleLog}>Log In / Log Out</button>
		</div>
	);
}

export default App;
